let limb = []
let disabilities = []
let bilateralDisabilities = []
let selectedOptions = []
let selectionsDisplay
let compensation = ''
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
			let value = parseInt(button.value)
			let selectionText = `${value}%`

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
	selectionsDisplay = document.getElementById('selectionsDisplay')
	let box = document.createElement('div')
	box.className = 'selection-box'
	box.innerHTML = `${text} <span class="remove-box">X</span>`
	selectionsDisplay.appendChild(box)

	box.querySelector('.remove-box').addEventListener('click', function () {
		removeSelection(text, box)
	})
}

function removeSelection(text, box) {
	let index

	if (text.endsWith('%')) {
		let value = parseInt(text)
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
	compensation = document.getElementById('compensation')

	selectionsDisplay = document.getElementById('selectionsDisplay')
	if (selectionsDisplay.childNodes.length === 0) {
		combinedPercentage = 0
		totalCompensation = 0
		document.getElementById('result').innerHTML = '0%'
		document.getElementById('compensation').innerHTML = '$0.00'
		return
	}

	if (bilateralDisabilities == 0) {
		combinedPercentage =
			disabilities.reduce(function (acc, cur) {
				return acc * (1 - cur / 100)
			}, 1) * 100
		combinedPercentage = 100 - combinedPercentage
		combinedPercentage = Math.round(combinedPercentage / 10) * 10
		console.log(combinedPercentage)
	}

	// Default to single rate
	totalCompensation = compensationRates[combinedPercentage]['single']
	compensation.innerHTML = '$' + totalCompensation.toFixed(2)

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

	compensation.innerHTML = '$' + totalCompensation.toFixed(2)
	document.getElementById('result').innerHTML = combinedPercentage + '%'

	console.log(combinedPercentage + 'bilateral')
	console.log(totalCompensation + 'bilateral')

	selectedOptions = []
	document.querySelectorAll('.optional:checked').forEach(function (optional) {
		if (optional.id !== 'none') {
			selectedOptions.push(optional.id)
		}
		console.log(selectedOptions + 'first selected options')
	})

	totalCompensation =
		compensationRates[combinedPercentage][selectedOptions.join('')]
	compensation.innerHTML = '$' + totalCompensation.toFixed(2)
	document.getElementById('result').innerHTML = combinedPercentage + '%'
	console.log(combinedPercentage + 'combined percentage after bilateral')
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

			console.log(selectedOptions + 'inside under 18')
			console.log(totalCompensation + ' with one child')
		}

		if (childrenUnder18 > 1 && childrenOver18 === 0) {
			let addChildUnder18 = childrenUnder18 - 1
			console.log(addChildUnder18)
			if (addChildUnder18 > 0) {
				totalCompensation +=
					addChildUnder18 *
					compensationRates[combinedPercentage]['additionalChildUnder18']
				console.log(totalCompensation + 'with addtnl Child')
			}
		} else if (childrenOver18 > 1 && childrenUnder18 > 0) {
			totalCompensation +=
				childrenUnder18 *
				compensationRates[combinedPercentage]['additionalChildUnder18']
			console.log(totalCompensation + 'with addtnl Child')
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

		if (childrenOver18 > 1 && childrenUnder18 === 0) {
			let addChildOver18 = childrenOver18 - 1
			if (addChildOver18 > 0) {
				totalCompensation +=
					addChildOver18 *
					compensationRates[combinedPercentage]['additionalChildOver18']
			}
		} else if (childrenUnder18 > 1 && childrenOver18 > 0) {
			totalCompensation +=
				childrenOver18 *
				compensationRates[combinedPercentage]['additionalChildOver18']
		} else {
			totalCompensation = compensationRates[combinedPercentage]['withOneChild']
		}
	} else {
		selectedOptions = selectedOptions.filter(
			(option) => option !== 'withOneChild'
		)
	}

	console.log(selectedOptions + 'last options')

	console.log(totalCompensation + 'total compensation')
	// Update total compensation display

	compensation.innerHTML = '$' + totalCompensation.toFixed(2)
	document.getElementById('result').innerHTML = combinedPercentage + '%'
}

document
	.getElementById('childrenUnder18')
	.addEventListener('change', updateTotalCompensation)
document
	.getElementById('childrenOver18')
	.addEventListener('change', updateTotalCompensation)

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
