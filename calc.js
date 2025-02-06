const compensationRates = {
	10: { single: 175.51 },
	20: { single: 346.95 },
	30: {
		single: 537.42,
		withSpouse: 601.42,
		withSpousewithoneParent: 652.42,
		withSpousewithTwoParents: 703.42,
		singlewithOneParent: 588.42,
		singlewithTwoParents: 639.42,
		singlewithOneChild: 579.42,
		withSpousewithOneChild: 648.42,
		withSpousewithOneParentwithOneChild: 699.42,
		withSpousewithTwoParentswithOneChild: 750.42,
		singlewithOneParentwithOneChild: 630.42,
		sinlgewithTwoParentswithOneChild: 681.42,
		additionalChildUnder18: 31.0,
		additionalChildOver18: 102.0,
		aidAndAttendance: 58.0
	},
	40: {
		single: 774.16,
		withSpouse: 859.16,
		withSpousewithOneParent: 927.16,
		withSpousewithTwoParents: 995.16,
		withOneParent: 842.16,
		withTwoParents: 910.16,
		withOneChild: 831.16,
		withSpousewithOneChild: 922.16,
		withSpousewithOneParentwithOneChild: 990.16,
		withSpousewithTwoParentswithOneChild: 1058.16,
		withOneParentwithOneChild: 899.16,
		withTwoParentswithOneChild: 967.16,
		additionalChildUnder18: 42.0,
		additionalChildOver18: 137.0,
		aidAndAttendance: 78.0
	},
	50: {
		single: 1102.04,
		withSpouse: 1208.04,
		withSpousewithOneParent: 1293.04,
		withSpousewithTwoParents: 1378.04,
		withOneParent: 1187.04,
		withTwoParents: 1272.04,
		withOneChild: 1173.04,
		withSpousewithOneChild: 1287.04,
		withSpousewithOneParentwithOneChild: 1372.04,
		withSpousewithTwoParentswithOneChild: 1457.04,
		withOneParentwithOneChild: 1258.04,
		withTwoParentswithOneChild: 1343.04,
		additionalChildUnder18: 53.0,
		additionalChildOver18: 171.0,
		aidAndAttendance: 98.0
	},
	60: {
		single: 1395.93,
		withSpouse: 1523.93,
		withSpousewithOneParent: 1625.93,
		withSpousewithTwoParents: 1727.93,
		withOneParent: 1497.93,
		withTwoParents: 1599.93,
		withOneChild: 1480.93,
		withSpousewithOneChild: 1617.93,
		withSpousewithOneParentwithOneChild: 1719.93,
		withSpousewithTwoParentswithOneChild: 1821.93,
		withOneParentwithOneChild: 1582.93,
		withTwoParentswithOneChild: 1684.93,
		additionalChildUnder18: 63.0,
		additionalChildOver18: 205.0,
		aidAndAttendance: 117.0
	},
	70: {
		single: 1759.19,
		withSpouse: 1908.19,
		withSpousewithOneParent: 2028.19,
		withSpousewithTwoParents: 2148.19,
		singlewithOneParent: 1879.19,
		singlewithTwoParents: 1999.19,
		singlewithOneChild: 1859.19,
		withSpousewithOneChild: 2018.19,
		withSpousewithOneParentwithOneChild: 2138.19,
		withSpousewithTwoParentswithOneChild: 2258.19,
		singlewithOneParentwithOneChild: 1978.19,
		singlewithTwoParentswithOneChild: 2098.19,
		additionalChildUnder18: 74.0,
		additionalChildOver18: 239.0,
		aidAndAttendance: 137.0
	},
	80: {
		single: 2044.89,
		withSpouse: 2214.89,
		withSpousewithOneParent: 2351.89,
		withSpousewithTwoParents: 2488.89,
		singlewithOneParent: 2181.89,
		singlewithTwoParents: 2318.89,
		singleithOneChild: 2158.89,
		withSpousewithOneChild: 2340.89,
		withSpousewithOneParentwithOneChild: 2477.89,
		withSpousewithTwoParentswithOneChild: 2614.89,
		singlewithOneParentwithOneChild: 2295.89,
		singlewithTwoParentswithOneChild: 2432.89,
		additionalChildUnder18: 84.0,
		additionalChildOver18: 274.0,
		aidAndAttendance: 157.0
	},
	90: {
		single: 2297.96,
		withSpouse: 2489.96,
		withSpousewithOneParent: 2643.96,
		withSpousewithTwoParents: 2797.96,
		singlewithOneParent: 2451.96,
		singlewithTwoParents: 2605.96,
		singlewithOneChild: 2425.96,
		withSpousewithOneChild: 2630.96,
		withSpousewithOneParentwithOneChild: 2784.96,
		withSpousewithTwoParentswithOneChild: 2938.96,
		singlewithOneParentwithOneChild: 2579.96,
		singlewithTwoParentswithOneChild: 2733.96,
		additionalChildUnder18: 95.0,
		additionalChildOver18: 308.0,
		aidAndAttendance: 176.0
	},
	100: {
		single: 3831.3,
		withSpouse: 4044.91,
		withSpousewithOneParent: 4216.35,
		withSpousewithTwoParents: 4387.79,
		singlewithOneParent: 4002.74,
		singlewithTwoParents: 4174.18,
		singlewithOneChild: 3974.15,
		withSpousewithOneChild: 4201.35,
		withSpousewithoneParentwithOneChild: 4372.79,
		withSpousewithTwoParentswithOneChild: 4544.23,
		singlewithOneParentwithOneChild: 4145.59,
		singlewithTwoParentswithOneChild: 4317.03,
		additionalChildUnder18: 106.14,
		additionalChildOver18: 342.85,
		aidAndAttendance: 195.92
	}
}

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

				// Add to disabilities and check for bilateral pairing
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
		// Add both limbs to the bilateral array
		bilateralDisabilities.push({ value, id, limb: selectedBodyPart })
		bilateralDisabilities.push(disabilities[oppositeEntryIndex])

		// Remove both limbs from the disabilities array
		disabilities = disabilities.filter(
			(d) => d.id !== id && d.id !== disabilities[oppositeEntryIndex].id
		)

		// Set bilateral flags for proper calculation
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

	// Step 1: Handle bilateral disabilities and calculate the adjusted bilateral value
	if (hasBilateralArms || hasBilateralLegs) {
		// Get bilateral disabilities (e.g., left-arm and right-arm)
		const bilateralValues = bilateralDisabilities
			.map((disability) => disability.value)
			.sort((a, b) => b - a)

		// Combine bilateral disabilities
		let bilateralCombined = bilateralValues.reduce((acc, cur) => {
			return Math.round(acc * (1 - cur / 100) * 100) / 100
		}, 1)

		bilateralCombinedPercentage = 100 - bilateralCombined * 100

		// Apply the 10% bilateral factor
		let bilateralFactor = parseFloat(
			(bilateralCombinedPercentage * 0.1).toFixed(1)
		)
		finalBilateralValue = bilateralCombinedPercentage + bilateralFactor

		document.getElementById(
			'bilateralMessage'
		).innerHTML = `* A bilateral factor of <strong>${bilateralFactor}%</strong> has been applied.`

		// Push the final bilateral result into the array for combination
		finalCombinedValues.push(finalBilateralValue)
	}

	// Step 2: Handle non-bilateral disabilities
	if (disabilities.length > 0) {
		const nonBilateralValues = disabilities
			.map((disability) => disability.value)
			.sort((a, b) => b - a)

		finalCombinedValues = finalCombinedValues.concat(nonBilateralValues)
	}

	// Step 3: Calculate the total combined percentage using the VA formula
	let combinedFinalPercentage = finalCombinedValues.reduce((acc, cur) => {
		return Math.round(acc * (1 - cur / 100) * 100) / 100
	}, 1)
	combinedFinalPercentage = 100 - combinedFinalPercentage * 100

	// Round the final combined percentage
	combinedPercentage = roundToNearest10(combinedFinalPercentage)
	if (combinedPercentage >= 100) {
		combinedPercentage = 100
	}

	// Fix the rounding message to display the correct combined percentage
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
	totalCompensation = compensationRates[combinedPercentage]['single']
	document.getElementById('result').innerHTML = combinedPercentage + '%'
	compensation.innerHTML = '$' + totalCompensation.toFixed(2)

	// Handle optional selections for compensation
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

	// Reset bilateral factor and message if no bilateral pairs remain
	if (!hasBilateralArms && !hasBilateralLegs) {
		bilateralFactor = 0
		document.getElementById('bilateralMessage').innerHTML = '' // Clear the message
	}

	// Update displayed compensation
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
			// Add both limbs to the bilateral array if not already added
			if (
				!bilateralDisabilities.some(
					(d) => d.limb === selectedBodyPart || d.limb === oppositeArm
				)
			) {
				bilateralDisabilities.push({ value, id, limb: selectedBodyPart })
				// Find and push the opposite limb percentage
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
			// Add both limbs to the bilateral array if not already added
			if (
				!bilateralDisabilities.some(
					(d) => d.limb === selectedBodyPart || d.limb === oppositeLeg
				)
			) {
				bilateralDisabilities.push({ value, id, limb: selectedBodyPart })
				// Find and push the opposite limb percentage
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

	// Remove it from its respective array
	disabilities = disabilities.filter((d) => d.id !== id)
	bilateralDisabilities = bilateralDisabilities.filter((d) => d.id !== id)

	// Check for broken bilateral pair
	if (removedDisability) {
		let limbType = removedDisability.limb?.includes('arm') ? 'arm' : 'leg'
		let oppositeLimb = removedDisability.limb?.includes('left')
			? removedDisability.limb.replace('left', 'right')
			: removedDisability.limb.replace('right', 'left')

		// If the opposite limb is still in bilateralDisabilities, reassign it to disabilities
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
		console.log(totalCompensation)
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
