const compensationRates = {
	10: { single: 171.23 },
	20: { single: 338.49 },
	30: {
		single: 524.31,
		withSpouse: 586.31,
		withSpousewithoneParent: 636.31,
		withSpousewithTwoParents: 686.31,
		singlewithOneParent: 574.31,
		singlewithTwoParents: 624.331,
		singlewithOneChild: 565.31,
		withSpousewithOneChild: 632.21,
		withSpousewithOneParentwithOneChild: 682.31,
		withSpousewithTwoParentswithOneChild: 732.31,
		singlewithOneParentwithOneChild: 615.31,
		sinlgewithTwoParentswithOneChild: 665.31,
		additionalChildUnder18: 31.0,
		additionalChildOver18: 100.0,
		aidAndAttendance: 57.0
	},
	40: {
		single: 755.28,
		withSpouse: 838.28,
		withSpousewithOneParent: 904.28,
		withSpousewithTwoParents: 970.28,
		withOneParent: 821.28,
		withTwoParents: 887.28,
		withOneChild: 810.28,
		withSpousewithOneChild: 899.28,
		withSpousewithOneParentwithOneChild: 965.28,
		withSpousewithTwoParentswithOneChild: 1031.28,
		withOneParentwithOneChild: 876.28,
		withTwoParentswithOneChild: 942.28,
		additionalChildUnder18: 41.0,
		additionalChildOver18: 133.0,
		aidAndAttendance: 76.0
	},
	50: {
		single: 1075.16,
		withSpouse: 1179.16,
		withSpousewithOneParent: 1262.16,
		withSpousewithTwoParents: 1345.16,
		withOneParent: 1158.16,
		withTwoParents: 1144.16,
		withOneChild: 1241.16,
		withSpousewithOneChild: 1255.16,
		withSpousewithOneParentwithOneChild: 1338.16,
		withSpousewithTwoParentswithOneChild: 1421.16,
		withOneParentwithOneChild: 1227.16,
		withTwoParentswithOneChild: 1310.16,
		additionalChildUnder18: 51.0,
		additionalChildOver18: 167.0,
		aidAndAttendance: 95.0
	},
	60: {
		single: 1361.88,
		withSpouse: 1486.88,
		withSpousewithOneParent: 1586.88,
		withSpousewithTwoParents: 1686.88,
		withOneParent: 1461.88,
		withTwoParents: 1561.88,
		withOneChild: 1444.88,
		withSpousewithOneChild: 1577.88,
		withSpousewithOneParentwithOneChild: 1677.88,
		withSpousewithTwoParentswithOneChild: 1777.88,
		withOneParentwithOneChild: 1544.88,
		withTwoParentswithOneChild: 1644.88,
		additionalChildUnder18: 62.0,
		additionalChildOver18: 200.0,
		aidAndAttendance: 114.0
	},
	70: {
		single: 1716.28,
		withSpouse: 1861.28,
		withSpousewithOneParent: 1978.28,
		withSpousewithTwoParents: 2095.28,
		singlewithOneParent: 1833.28,
		singlewithTwoParents: 1950.28,
		singlewithOneChild: 1813.28,
		withSpousewithOneChild: 1968.28,
		withSpousewithOneParentwithOneChild: 2085.28,
		withSpousewithTwoParentswithOneChild: 2202.28,
		singlewithOneParentwithOneChild: 1930.28,
		singlewithTwoParentswithOneChild: 2047.28,
		additionalChildUnder18: 72.0,
		additionalChildOver18: 234.0,
		aidAndAttendance: 134.0
	},
	80: {
		single: 1995.01,
		withSpouse: 2161.01,
		withSpousewithOneParent: 2294.01,
		withSpousewithTwoParents: 2427.01,
		singlewithOneParent: 2128.01,
		singlewithTwoParents: 2261.01,
		singleithOneChild: 2106.01,
		withSpousewithOneChild: 2283.01,
		withSpousewithOneParentwithOneChild: 2416.01,
		withSpousewithTwoParentswithOneChild: 2549.01,
		singlewithOneParentwithOneChild: 2239.01,
		singlewithTwoParentswithOneChild: 2372.01,
		additionalChildUnder18: 82.0,
		additionalChildOver18: 267.0,
		aidAndAttendance: 153.0
	},
	90: {
		single: 2241.91,
		withSpouse: 2428.91,
		withSpousewithOneParent: 2578.91,
		withSpousewithTwoParents: 2728.91,
		singlewithOneParent: 2391.91,
		singlewithTwoParents: 2541.91,
		singlewithOneChild: 2366.91,
		withSpousewithOneChild: 2565.91,
		withSpousewithOneParentwithOneChild: 2715.91,
		withSpousewithTwoParentswithOneChild: 2865.91,
		singlewithOneParentwithOneChild: 2516.91,
		singlewithTwoParentswithOneChild: 2666.91,
		additionalChildUnder18: 93.0,
		additionalChildOver18: 301.0,
		aidAndAttendance: 172.0
	},
	100: {
		single: 3737.85,
		withSpouse: 3946.25,
		withSpousewithOneParent: 4113.51,
		withSpousewithTwoParents: 4280.77,
		singlewithOneParent: 3905.11,
		singlewithTwoParents: 4072.37,
		singlewithOneChild: 3877.22,
		withSpousewithOneChild: 4098.87,
		withSpousewithoneParentwithOneChild: 4266.13,
		withSpousewithTwoParentswithOneChild: 4433.39,
		singlewithOneParentwithOneChild: 4044.48,
		singlewithTwoParentswithOneChild: 4211.74,
		additionalChildUnder18: 1033.55,
		additionalChildOver18: 334.49,
		aidAndAttendance: 191.14
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

				// Add to the limb array
				limb.push(selectedBodyPart)

				bilateralDisabilities.push({ value, id })
				disabilities.push({ value, id })

				// Check if there's both a left and right limb selected for either arm or leg
				matchingArms = limb.filter((l) => l === 'left-arm' || l === 'right-arm')
				matchingLegs = limb.filter((l) => l === 'left-leg' || l === 'right-leg')

				// Check if we have both limbs for arms or legs
				hasBilateralArms =
					matchingArms.includes('left-arm') &&
					matchingArms.includes('right-arm')
				hasBilateralLegs =
					matchingLegs.includes('left-leg') &&
					matchingLegs.includes('right-leg')

				// Reset the selected body part after it's used
				selectedBodyPart = null
				displayBodyPart = null
			} else {
				selectionText = `${value}%`
				disabilities.push({ value, id })
			}

			console.log(
				bilateralDisabilities.map((disability) => disability.value) +
					'bilateral Disabilities'
			)
			console.log(
				disabilities.map((disability) => disability.value) + 'disabilities'
			)

			// Store the ID separately, associated with the value
			selectionIds.push(id)

			addSelectionBox(selectionText, id)

			button.classList.remove('selected')
			updateTotalCompensation()
		})
	})

	document.querySelectorAll('.optional').forEach(function (element) {
		element.addEventListener('change', function () {
			updateTotalCompensation()
		})
	})
}

function updateTotalCompensation() {
	const compensation = document.getElementById('compensation')
	const selectionsDisplay = document.getElementById('selectionsDisplay')
	const totalDiv = document.getElementById('realPercentage')

	// Check if there are no selections
	if (selectionsDisplay.childNodes.length === 0) {
		combinedPercentage = 0
		totalCompensation = 0
		document.getElementById('result').innerHTML = '0%'
		document.getElementById('compensation').innerHTML = '$0.00'
		totalDiv.innerHTML = ''
		return
	}

	let realPercentage = 0

	// Calculate the total percentage for disabilities (non-bilateral)
	if (disabilities.length > 0) {
		// Extract value properties from the disabilities array
		valueValues = disabilities
			.map((disability) => disability.value)
			.sort((a, b) => b - a)
		realPercentage = valueValues.reduce((acc, cur) => {
			return Math.round(acc * (1 - cur / 100) * 100) / 100
		}, 1)
		realPercentage = 100 - realPercentage * 100
		combinedPercentage = roundToNearest10(realPercentage)

		if (combinedPercentage >= 100) {
			combinedPercentage = 100
		}

		totalCompensation = compensationRates[combinedPercentage]['single']
		document.getElementById('result').innerHTML = combinedPercentage + '%'
	}

	// Calculate the total percentage for bilateralDisabilities if applicable
	if (hasBilateralArms || hasBilateralLegs) {
		// Remove existing bilateralCalculation from disabilities
		disabilities = disabilities.filter(
			(disability) => disability.id !== 'bilateral-adjusted'
		)

		// Remove bilateral percentages from disabilities
		bilateralDisabilities.forEach((bilateral) => {
			disabilities = disabilities.filter(
				(disability) => disability.id !== bilateral.id
			)
		})

		// Recalculate valueValues after updating disabilities
		let valueValues = disabilities
			.map((disability) => disability.value)
			.sort((a, b) => b - a)

		// Calculate the non-bilateral realPercentage after removing bilateral disabilities
		if (valueValues.length > 0) {
			realPercentage = valueValues.reduce((acc, cur) => {
				return (acc * (1 - cur / 100) * 100) / 100
			}, 1)
			realPercentage = 100 - realPercentage * 100
		} else {
			realPercentage = 0 // If all disabilities are removed, set realPercentage to 0
		}
		console.log(realPercentage + ' realPercentage bilateral removed')

		// Extract value properties from the bilateralDisabilities array
		let bilateralValueValues = bilateralDisabilities
			.map((disability) => disability.value)
			.sort((a, b) => b - a)

		// Recalculate bilateralCalculation after updating bilateralDisabilities
		let bilateralCalculation = bilateralValueValues.reduce((acc, cur) => {
			return (acc * (1 - cur / 100) * 100) / 100
		}, 1)
		bilateralCalculation = 100 - Math.round(bilateralCalculation * 100)

		// Apply 10% bilateral factor
		let bilateralFactor = parseFloat((bilateralCalculation * 0.1).toFixed(1))

		// Create the new adjusted bilateral factor
		let adjustedBilateralFactor = {
			id: 'bilateral-adjusted',
			value: bilateralCalculation + bilateralFactor
		}

		// Add the new adjusted bilateral factor to the disabilities array
		disabilities.push(adjustedBilateralFactor)

		// Recalculate combined values including the adjusted factor
		let combinedValues = disabilities
			.map((disability) => disability.value)
			.sort((a, b) => b - a)
		realPercentage = combinedValues.reduce((acc, cur) => {
			return (acc * (1 - cur / 100) * 100) / 100
		}, 1)
		realPercentage = 100 - Math.round(realPercentage * 100)

		// Adjust for combined percentage
		combinedPercentage = roundToNearest10(realPercentage)
		if (combinedPercentage >= 100) {
			combinedPercentage = 100
		}

		console.log(
			bilateralDisabilities.map((disability) => disability.value) +
				'bilateral Disabilities after push'
		)
		console.log(
			disabilities.map((disability) => disability.value) +
				'disabilities after push'
		)

		// Bilateral message
		let bilateralMessage = ''
		if (hasBilateralArms || hasBilateralLegs) {
			bilateralMessage = `* A bilateral factor of <strong>${bilateralFactor}%</strong> has been applied.`
		}

		document.getElementById('bilateralMessage').innerHTML = bilateralMessage

		totalCompensation = compensationRates[combinedPercentage]['single']
		document.getElementById('result').innerHTML = combinedPercentage + '%'
	}

	// Reset bilateral factor if no bilateral limbs remain
	if (bilateralDisabilities.length === 1) {
		bilateralFactor = 0
		document.getElementById('bilateralMessage').innerHTML = ''
	}

	compensation.innerHTML = '$' + totalCompensation.toFixed(2)
	document.getElementById('result').innerHTML = combinedPercentage + '%'

	// Handle optional selections for compensation
	let selectedOptions = []
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

	realPercentage = Math.min(realPercentage, 100)
	const tolerance = 0.05

	// Handle rounding messages
	let roundingMessage = ''
	if (
		Math.abs(realPercentage - 100) > tolerance &&
		realPercentage !== combinedPercentage
	) {
		const roundedDirection = combinedPercentage > realPercentage ? 'up' : 'down'
		roundingMessage = `Your calculated rating is <strong>${realPercentage.toFixed(
			0
		)}%</strong> which the VA rounds ${roundedDirection} to <strong>${combinedPercentage}%.</strong>`
	}

	totalDiv.innerHTML = roundingMessage

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

function removeSelection(id, box) {
	// Remove from disabilities using the ID
	disabilities = disabilities.filter((disability) => disability.id !== id)
	bilateralDisabilities = bilateralDisabilities.filter((b) => b.id !== id)

	// Remove from limb and selectionIds arrays
	let index = limb.findIndex((l) => l.id === id)
	if (index !== -1) {
		limb.splice(index, 1)
	}

	// Remove the selection box
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