const compensationRates = {
	10: { single: 171.23 },
	20: { single: 338.49 },
	30: {
		single: 524.31,
		withSpouse: 586.31,
		withSpousewithoneParent: 636.31,
		withSpousewithTwoParents: 686.31,
		withOneParent: 574.31,
		withTwoParents: 624.331,
		withOneChild: 565.31,
		withSpousewithOneChild: 632.21,
		withSpousewithoneParentwithOneChild: 682.31,
		withSpousewithTwoParentswithOneChild: 732.31,
		withOneParentwithOneChild: 615.31,
		withTwoParentswithOneChild: 665.31,
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
		withSpousewithoneParentwithOneChild: 965.28,
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
		withSpousewithoneParentwithOneChild: 1338.16,
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
		withSpousewithoneParentwithOneChild: 1677.88,
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
		withOneParent: 1833.28,
		withTwoParents: 1950.28,
		withOneChild: 1813.28,
		withSpousewithOneChild: 1968.28,
		withSpousewithoneParentwithOneChild: 2085.28,
		withSpousewithTwoParentswithOneChild: 2202.28,
		withOneParentwithOneChild: 1930.28,
		withTwoParentswithOneChild: 2047.28,
		additionalChildUnder18: 72.0,
		additionalChildOver18: 234.0,
		aidAndAttendance: 134.0
	},
	80: {
		single: 1995.01,
		withSpouse: 2161.01,
		withSpousewithOneParent: 2294.01,
		withSpousewithTwoParents: 2427.01,
		withOneParent: 2128.01,
		withTwoParents: 2261.01,
		withOneChild: 2106.01,
		withSpousewithOneChild: 2283.01,
		withSpousewithoneParentwithOneChild: 2416.01,
		withSpousewithTwoParentswithOneChild: 2549.01,
		withOneParentwithOneChild: 2239.01,
		withTwoParentswithOneChild: 2372.01,
		additionalChildUnder18: 82.0,
		additionalChildOver18: 267.0,
		aidAndAttendance: 153.0
	},
	90: {
		single: 2241.91,
		withSpouse: 2428.91,
		withSpousewithOneParent: 2578.91,
		withSpousewithTwoParents: 2728.91,
		withOneParent: 2391.91,
		withTwoParents: 2541.91,
		withOneChild: 2366.91,
		withSpousewithOneChild: 2565.91,
		withSpousewithoneParentwithOneChild: 2715.91,
		withSpousewithTwoParentswithOneChild: 2865.91,
		withOneParentwithOneChild: 2516.91,
		withTwoParentswithOneChild: 2666.91,
		additionalChildUnder18: 93.0,
		additionalChildOver18: 301.0,
		aidAndAttendance: 172.0
	},
	100: {
		single: 3737.85,
		withSpouse: 3946.25,
		withSpousewithOneParent: 4113.51,
		withSpousewithTwoParents: 4280.77,
		withOneParent: 3905.11,
		withTwoParents: 4072.37,
		withOneChild: 3877.22,
		withSpousewithOneChild: 4098.87,
		withSpousewithoneParentwithOneChild: 4266.13,
		withSpousewithTwoParentswithOneChild: 4433.39,
		withOneParentwithOneChild: 4044.48,
		withTwoParentswithOneChild: 4211.74,
		additionalChildUnder18: 1033.55,
		additionalChildOver18: 334.49,
		aidAndAttendance: 191.14
	}
}

let limb = []
let disabilities = []
let bilateralDisabilities = []
let selectedOptions = []
let totalCompensation = 0
let combinedPercentage = 0
let selectedBodyPart = null
let resultSpan = document.getElementById('result')

function calculateCompensation() {
	document.querySelectorAll('.body-part').forEach(function (bodyPart) {
		bodyPart.addEventListener('click', function () {
			selectedBodyPart = bodyPart.textContent // Update the selected body part
		})
	})

	document.querySelectorAll('.percentage').forEach(function (button) {
		button.addEventListener('click', function () {
			var value = parseInt(button.value)
			var selectionText = `${value}%`

			if (selectedBodyPart) {
				selectionText = `${selectedBodyPart} ${value}%`
				limb.push(selectedBodyPart)
				selectedBodyPart = null
			}

			disabilities.push(value)
			addSelectionBox(selectionText)

			if (disabilities.length > 1 && limb.length > 1) {
				disabilities.forEach(function (disability) {
					bilateralDisabilities.push(disability)
				})
			}

			button.classList.remove('selected')
			updateTotalCompensation()
		})
	})

	document.querySelectorAll('.optional').forEach(function (element) {
		element.addEventListener('change', function () {
			updateTotalCompensation()
		})
	})
	compensation.innerHTML = '$' + totalCompensation.toFixed(2)
	resultSpan.innerHTML = combinedPercentage + '%'

	updateTotalCompensation()
}

function addSelectionBox(text) {
	var selectionsDisplay = document.getElementById('selectionsDisplay')
	var box = document.createElement('div')
	box.className = 'selection-box'
	box.innerHTML = `${text} <span class="remove-box">X</span>`
	selectionsDisplay.appendChild(box)

	box.querySelector('.remove-box').addEventListener('click', function () {
		removeSelection(text, box)
	})
}

function removeSelection(text, box) {
	var index

	if (text.endsWith('%')) {
		var value = parseInt(text)
		index = disabilities.indexOf(value)
		if (index !== -1) disabilities.splice(index, 1)
	} else {
		index = limb.indexOf(text)
		if (index !== -1) limb.splice(index, 1)
	}

	box.remove()
	updateTotalCompensation()
}

function updateTotalCompensation() {
	var selectionsDisplay = document.getElementById('selectionsDisplay')
	if (selectionsDisplay.childNodes.length === 0) {
		combinedPercentage = 0
		totalCompensation = 0
		document.getElementById('result').innerHTML = '0%'
		document.getElementById('compensation').innerHTML = '$0.00'
		return
	}

	combinedPercentage =
		disabilities.reduce(function (acc, cur) {
			return acc * (1 - cur / 100)
		}, 1) * 100
	combinedPercentage = 100 - combinedPercentage
	combinedPercentage = Math.round(combinedPercentage / 10) * 10
	console.log(combinedPercentage)

	selectedOptions = []
	document.querySelectorAll('.optional:checked').forEach(function (optional) {
		selectedOptions.push(optional.id)
	})
	console.log(selectedOptions)

	if (bilateralDisabilities.length > 1) {
		var bilateralCombined =
			bilateralDisabilities.reduce(function (acc, cur) {
				return acc * (1 - cur / 100)
			}, 1) * 100
		bilateralCombined = 100 - bilateralCombined
		bilateralCombined = Math.round(bilateralCombined - 10)

		combinedPercentage =
			Math.round((combinedPercentage + bilateralCombined) / 20) * 10
	}
	document.getElementById('result').innerHTML = combinedPercentage + '%'

	var compensation = document.getElementById('compensation')

	document.getElementById('result').innerHTML = combinedPercentage + '%'

	console.log(totalCompensation)

	// Default to single rate
	var totalCompensation = compensationRates[combinedPercentage]['single']

	// Watch dropdowns for changes
	var childrenUnder18 = parseInt(
		document.getElementById('childrenUnder18').value
	)
	var childrenOver18 = parseInt(document.getElementById('childrenOver18').value)

	// Update selectedOptions array
	if (childrenUnder18 > 0) {
		if (!selectedOptions.includes('withOneChild')) {
			selectedOptions.push('withOneChild')
			totalCompensation =
				compensationRates[combinedPercentage][selectedOptions.join('')]

			console.log(totalCompensation + ' with one child')
		}

		if (childrenUnder18 > 1) {
			var addChildUnder18 = childrenUnder18 - 1
			console.log(addChildUnder18)
			if (addChildUnder18 > 0) {
				totalCompensation +=
					addChildUnder18 *
					compensationRates[combinedPercentage]['additionalChildUnder18']
			}
		} else {
			totalCompensation =
				compensationRates[combinedPercentage][selectedOptions.join('')]
		}
	} else {
		selectedOptions = selectedOptions.filter(
			(option) => option !== 'withOneChild'
		)
	}

	if (childrenOver18 > 0) {
		if (!selectedOptions.includes('withOneChild')) {
			selectedOptions.push('withOneChild')
		}

		if (childrenOver18 > 1) {
			var addChildOver18 = childrenOver18 - 1
			if (addChildOver18 > 0) {
				totalCompensation +=
					addChildOver18 *
					compensationRates[combinedPercentage]['additionalChildOver18']
			}
		} else {
			totalCompensation = compensationRates[combinedPercentage]['withOneChild']
		}
	} else {
		selectedOptions = selectedOptions.filter(
			(option) => option !== 'withOneChild'
		)
	}

	const selectedOptionKey = selectedOptions.join('')
	if (compensationRates[combinedPercentage][selectedOptionKey]) {
		totalCompensation = compensationRates[combinedPercentage][selectedOptionKey]
	}
	console.log(totalCompensation)
	// Update total compensation display
	compensation = document.getElementById('compensation')
	compensation.innerHTML = '$' + totalCompensation.toFixed(2)
	document.getElementById('result').innerHTML = combinedPercentage + '%'

	document
		.getElementById('childrenUnder18')
		.addEventListener('change', updateTotalCompensation)
	document
		.getElementById('childrenOver18')
		.addEventListener('change', updateTotalCompensation)

	// Adjust based on selected options
	if (compensationRates[combinedPercentage][selectedOptions.join('')]) {
		totalCompensation =
			compensationRates[combinedPercentage][selectedOptions.join('')]
	}

	console.log(totalCompensation)

	compensation.innerHTML = '$' + totalCompensation.toFixed(2)

	resultSpan.innerHTML = combinedPercentage + '%'
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
	totalCompensation = 0
	combinedPercentage = 0

	var selectionsDisplay = document.getElementById('selectionsDisplay')
	selectionsDisplay.innerHTML = ''

	compensation = document.getElementById('compensation')
	compensation.innerHTML = '$' + 0.0
	document.getElementById('result').innerHTML = 0 + '%'

	updateTotalCompensation()
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
