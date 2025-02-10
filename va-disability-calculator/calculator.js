let compensationRates = {} // Will be populated dynamically from the API

// Fetch compensation rates dynamically from the REST API
document.addEventListener('DOMContentLoaded', function () {
	fetch('/wp-json/va-calculator/v1/compensation-rates')
		.then((response) => {
			if (!response.ok) {
				throw new Error(
					`Error fetching compensation rates: ${response.statusText}`
				)
			}
			return response.json()
		})
		.then((data) => {
			compensationRates = data
		})
		.catch((error) => console.error('Error:', error))
})

// The rest of your original code remains the same

let limb = []
let disabilities = []
let bilateralDisabilities = []
let selectedOptions = []
let selectionsDisplay
let compensation
let totalCompensation = 0
let combinedPercentage = 0
let selectedBodyPart = null
let resultSpan = document.getElementById('result')
let selectionId = 0
let selectionIds = []
let roundingMessage = ''
let bilateralMessage = ''
let bilateralFactor
let hasBilateralArms
let hasBilateralLegs
let valueValues = []
let bilateralValueValues = []
let matchingLegs
let matchingArms

function roundToNearest10(value) {
	return Math.round(value / 10) * 10
}

function calculateCompensation() {
	document.querySelectorAll('.body-part').forEach(function (bodyPart) {
		bodyPart.addEventListener('click', function () {
			selectedBodyPart = bodyPart.getAttribute('data-body-limb')
			displayBodyPart = bodyPart.textContent
		})
	})

	document.querySelectorAll('.percentage').forEach(function (button) {
		button.addEventListener('click', function () {
			let value = parseInt(button.value)
			let selectionText = ''
			let id = selectionId++

			if (selectedBodyPart) {
				selectionText = `${displayBodyPart} ${value}%`

				limb.push(selectedBodyPart)

				disabilities.push({ value, id, limb: selectedBodyPart })

				// Check and push bilateral pairs
				if (
					(selectedBodyPart === 'left-arm' ||
						selectedBodyPart === 'right-arm') &&
					limb.includes(
						selectedBodyPart === 'left-arm' ? 'right-arm' : 'left-arm'
					)
				) {
					pushBilateralPair(selectedBodyPart, value, id, 'arm')
				} else if (
					(selectedBodyPart === 'left-leg' ||
						selectedBodyPart === 'right-leg') &&
					limb.includes(
						selectedBodyPart === 'left-leg' ? 'right-leg' : 'left-leg'
					)
				) {
					pushBilateralPair(selectedBodyPart, value, id, 'leg')
				}

				selectedBodyPart = null
				displayBodyPart = null
			} else {
				selectionText = `${value}%`
				disabilities.push({ value, id })
			}

			selectionIds.push(id)
			addSelectionBox(selectionText, id)
			updateTotalCompensation()
		})
	})
}

function pushBilateralPair(selectedBodyPart, value, id, limbType) {
	let oppositeLimb = selectedBodyPart.includes('left')
		? selectedBodyPart.replace('left', 'right')
		: selectedBodyPart.replace('right', 'left')

	let oppositeEntryIndex = disabilities.findIndex(
		(disability) => disability.limb === oppositeLimb
	)

	if (oppositeEntryIndex !== -1) {
		// Add both limbs to bilateral array
		bilateralDisabilities.push({ value, id, limb: selectedBodyPart })
		bilateralDisabilities.push(disabilities[oppositeEntryIndex])

		// Remove both limbs from disabilities array
		disabilities = disabilities.filter(
			(d) => d.id !== id && d.id !== disabilities[oppositeEntryIndex].id
		)

		// Set bilateral
		if (limbType === 'arm') {
			hasBilateralArms = true
		} else if (limbType === 'leg') {
			hasBilateralLegs = true
		}
	}
}

function updateTotalCompensation() {
	const compensation = document.getElementById('compensation')
	const totalDiv = document.getElementById('realPercentage')

	// Check if there are no selections
	if (disabilities.length === 0 && bilateralDisabilities.length === 0) {
		combinedPercentage = 0
		totalCompensation = 0
		document.getElementById('result').innerHTML = '0%'
		compensation.innerHTML = '$0.00'
		totalDiv.innerHTML = ''
		document.getElementById('bilateralMessage').innerHTML = ''
		return
	}

	let finalCombinedValues = []
	let bilateralCombinedPercentage = 0
	let finalBilateralValue = 0

	// Handle bilateral disabilities and calculate adjusted bilateral value
	if (hasBilateralArms || hasBilateralLegs) {
		const bilateralValues = bilateralDisabilities
			.map((disability) => disability.value)
			.sort((a, b) => b - a)

		// Combine bilateral disabilities
		let bilateralCombined = bilateralValues.reduce((acc, cur) => {
			return Math.round(acc * (1 - cur / 100) * 100) / 100
		}, 1)

		bilateralCombinedPercentage = 100 - bilateralCombined * 100

		// Apply bilateral factor
		let bilateralFactor = parseFloat(
			(bilateralCombinedPercentage * 0.1).toFixed(1)
		)
		finalBilateralValue = bilateralCombinedPercentage + bilateralFactor

		document.getElementById(
			'bilateralMessage'
		).innerHTML = `* A bilateral factor of <strong>${bilateralFactor}%</strong> has been applied.`

		finalCombinedValues.push(finalBilateralValue)
	}

	// Handle non-bilateral disabilities
	if (disabilities.length > 0) {
		const nonBilateralValues = disabilities
			.map((disability) => disability.value)
			.sort((a, b) => b - a)

		finalCombinedValues = finalCombinedValues.concat(nonBilateralValues)
	}

	// Calculate total combined percentage
	let combinedFinalPercentage = finalCombinedValues.reduce((acc, cur) => {
		return Math.round(acc * (1 - cur / 100) * 100) / 100
	}, 1)
	combinedFinalPercentage = 100 - combinedFinalPercentage * 100

	combinedPercentage = roundToNearest10(combinedFinalPercentage)
	if (combinedPercentage >= 100) {
		combinedPercentage = 100
	}

	let roundingMessage = ''
	if (Math.abs(combinedFinalPercentage - combinedPercentage) > 0.05) {
		let roundedDirection =
			combinedPercentage > combinedFinalPercentage ? 'up' : 'down'
		roundingMessage = `Your calculated rating is <strong>${combinedFinalPercentage.toFixed(
			1
		)}%</strong>, which the VA rounds ${roundedDirection} to <strong>${combinedPercentage}%</strong>.`
	}
	totalDiv.innerHTML = roundingMessage

	// Update displayed compensation
	totalCompensation = compensationRates[combinedPercentage]?.single || 0
	document.getElementById('result').innerHTML = combinedPercentage + '%'
	compensation.innerHTML = '$' + totalCompensation.toFixed(2)

	// Handle optional selections
	selectedOptions = []
	document.querySelectorAll('.optional:checked').forEach(function (optional) {
		if (optional.id !== 'none') {
			selectedOptions.push(optional.id)
		}
	})

	totalCompensation =
		compensationRates[combinedPercentage][selectedOptions.join('')] ||
		totalCompensation
	compensation.innerHTML = '$' + totalCompensation.toFixed(2)
	document.getElementById('result').innerHTML = combinedPercentage + '%'

	// Handle children and dependents
	const childrenUnder18 =
		parseInt(document.getElementById('childrenUnder18').value) || 0
	const childrenOver18 =
		parseInt(document.getElementById('childrenOver18').value) || 0

	if (childrenUnder18 > 0) {
		if (!selectedOptions.includes('withOneChild')) {
			selectedOptions.push('withOneChild')
			totalCompensation =
				compensationRates[combinedPercentage][selectedOptions.join('')]
		}

		if (childrenUnder18 > 1 && childrenOver18 === 0) {
			const addChildUnder18 = childrenUnder18 - 1

			if (addChildUnder18 > 0) {
				totalCompensation +=
					addChildUnder18 *
					compensationRates[combinedPercentage]['additionalChildUnder18']
			}
		} else if (childrenOver18 > 1 && childrenUnder18 > 0) {
			totalCompensation +=
				childrenUnder18 *
				compensationRates[combinedPercentage]['additionalChildUnder18']
		} else {
			totalCompensation =
				compensationRates[combinedPercentage][selectedOptions.join('')]
		}
	} else {
		selectedOptions = selectedOptions.filter(
			(option) => option !== 'withOneChild'
		)
	}

	if (!hasBilateralArms && !hasBilateralLegs) {
		bilateralFactor = 0
		document.getElementById('bilateralMessage').innerHTML = ''
	}

	compensation.innerHTML = '$' + totalCompensation.toFixed(2)
}


document
	.getElementById('childrenUnder18')
	.addEventListener('change', updateTotalCompensation)
document
	.getElementById('childrenOver18')
	.addEventListener('change', updateTotalCompensation)

function addSelectionBox(text, id) {
	selectionsDisplay = document.getElementById('selectionsDisplay')
	let box = document.createElement('div')
	box.className = 'selection-box'
	box.innerHTML = `${text} <span class="remove-box">X</span>`
	selectionsDisplay.appendChild(box)

	box.querySelector('.remove-box').addEventListener('click', function () {
		removeSelection(id, box)
	})
}

function addToBilateralDisabilities(selectedBodyPart, value, id) {
	if (selectedBodyPart === 'left-arm' || selectedBodyPart === 'right-arm') {
		let oppositeArm = selectedBodyPart === 'left-arm' ? 'right-arm' : 'left-arm'
		if (limb.includes(oppositeArm)) {
			if (
				!bilateralDisabilities.some(
					(d) => d.limb === selectedBodyPart || d.limb === oppositeArm
				)
			) {
				bilateralDisabilities.push({ value, id, limb: selectedBodyPart })
				let oppositeIndex = limb.findIndex((l) => l === oppositeArm)
				bilateralDisabilities.push({
					value: disabilities[oppositeIndex].value,
					id: disabilities[oppositeIndex].id,
					limb: oppositeArm
				})
			}
		}
	}

	if (selectedBodyPart === 'left-leg' || selectedBodyPart === 'right-leg') {
		let oppositeLeg = selectedBodyPart === 'left-leg' ? 'right-leg' : 'left-leg'
		if (limb.includes(oppositeLeg)) {
			if (
				!bilateralDisabilities.some(
					(d) => d.limb === selectedBodyPart || d.limb === oppositeLeg
				)
			) {
				bilateralDisabilities.push({ value, id, limb: selectedBodyPart })
				let oppositeIndex = limb.findIndex((l) => l === oppositeLeg)
				bilateralDisabilities.push({
					value: disabilities[oppositeIndex].value,
					id: disabilities[oppositeIndex].id,
					limb: oppositeLeg
				})
			}
		}
	}
}

function removeSelection(id, box) {
	// Find the disability in either array
	let removedDisability =
		disabilities.find((d) => d.id === id) ||
		bilateralDisabilities.find((d) => d.id === id)

	// Remove from correct array
	disabilities = disabilities.filter((d) => d.id !== id)
	bilateralDisabilities = bilateralDisabilities.filter((d) => d.id !== id)

	if (removedDisability) {
		let limbType = removedDisability.limb?.includes('arm') ? 'arm' : 'leg'
		let oppositeLimb = removedDisability.limb?.includes('left')
			? removedDisability.limb.replace('left', 'right')
			: removedDisability.limb.replace('right', 'left')

		// If opposite limb still in bilateralDisabilities, reassign it to disabilities
		let oppositeEntry = bilateralDisabilities.find(
			(d) => d.limb === oppositeLimb
		)
		if (oppositeEntry) {
			disabilities.push(oppositeEntry)
			bilateralDisabilities = bilateralDisabilities.filter(
				(d) => d.id !== oppositeEntry.id
			)
		}
	}

	// Reset the bilateral flags if pairs are broken
	hasBilateralArms = bilateralDisabilities.some((d) => d.limb?.includes('arm'))
	hasBilateralLegs = bilateralDisabilities.some((d) => d.limb?.includes('leg'))

	// Clear the box from the display
	box.remove()
	updateTotalCompensation()
}

function clearTotals() {
	document
		.querySelectorAll('input[type="checkbox"]')
		.forEach(function (checkbox) {
			checkbox.checked = false
			let label = checkbox.closest('label')
			if (label) {
				label.classList.remove('checked')
			}
		})
	document.getElementById('childrenUnder18').value = '0'
	document.getElementById('childrenOver18').value = '0'
	limb = []
	disabilities = []
	bilateralDisabilities = []
	selectedOptions = []
	selectionsDisplay
	compensation
	totalCompensation = 0
	combinedPercentage = 0
	selectedBodyPart = null
	resultSpan = document.getElementById('result')
	selectionId = 0
	selectionIds = []
	roundingMessage = ''
	bilateralMessage = ''
	bilateralFactor
	hasBilateralArms
	hasBilateralLegs
	valueValues = []
	bilateralValueValues = []
	matchingLegs
	matchingArms
	document.getElementById('realPercentage').innerHTML = ''
	document.getElementById('bilateralMessage').innerHTML = ''

	var selectionsDisplay = document.getElementById('selectionsDisplay')
	selectionsDisplay.innerHTML = ''

	compensation = document.getElementById('compensation')
	compensation.innerHTML = '$' + 0.0
	document.getElementById('result').innerHTML = 0 + '%'
}

document.addEventListener('DOMContentLoaded', (event) => {
	function handleCheckboxChange(event) {
		const group = event.target.closest('div')
		const checkboxes = group.querySelectorAll('.optional')

		checkboxes.forEach((checkbox) => {
			if (checkbox !== event.target) {
				checkbox.checked = false
				const otherLabel = checkbox.closest('label')
				otherLabel.classList.remove('checked')
			}
		})

		let label = event.target.closest('label')
		if (event.target.checked) {
			label.classList.add('checked')
		} else {
			label.classList.remove('checked')
		}

		updateTotalCompensation()
	}

	document.querySelectorAll('.optional').forEach((checkbox) => {
		checkbox.addEventListener('change', handleCheckboxChange)
	})
})

calculateCompensation()

// Add a class to the parent label when the checkbox is checked
document
	.querySelectorAll('input[type="checkbox"]')
	.forEach(function (checkbox) {
		checkbox.addEventListener('change', function () {
			if (checkbox.checked) {
				checkbox.parentElement.classList.add('checked')
			} else {
				checkbox.parentElement.classList.remove('checked')
			}
		})
	})
