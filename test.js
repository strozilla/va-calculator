let limb = []
let disabilities = []
let bilateralDisabilities = []
var totalCompensation = 0
var combinedPercentage = 0
var resultSpan = document.getElementById('result')

function calculateCompensation() {
	document.querySelectorAll('.body-part').forEach(function (bodyPart) {
		bodyPart.addEventListener('click', function () {
			var bodyLimb = bodyPart.getAttribute('data-body-limb')
			limb.push(bodyLimb)
			addSelectionBox(bodyLimb)
			updateTotalCompensation()
		})
	})

	document.querySelectorAll('.percentage').forEach(function (button) {
		button.addEventListener('click', function () {
			var value = parseInt(button.value)
			disabilities.push(value)

			if (disabilities.length > 1 && limb.length > 1) {
				disabilities.forEach(function (disability) {
					bilateralDisabilities.push(disability)
				})
			}

			button.classList.remove('selected')
			updateTotalCompensation()
		})
	})

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
				selectedBodyPart = null // Clear the selected body part after use
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
		var childrenOver18 = parseInt(
			document.getElementById('childrenOver18').value
		)

		// Update selectedOptions array
		if (childrenUnder18 > 0) {
			if (!selectedOptions.includes('withOneChild')) {
				selectedOptions.push('withOneChild')
				totalCompensation =
					compensationRates[combinedPercentage][selectedOptions.join('')]
				console.log(totalCompensation)
			}

			if (childrenUnder18 > 1) {
				var additionalChildUnder18 = childrenUnder18 - 1
				if (additionalChildUnder18 > 0) {
					totalCompensation +=
						additionalChildUnder18 *
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
				var additionalChildOver18 = childrenOver18 - 1
				if (additionalChildOver18 > 0) {
					totalCompensation +=
						additionalChildOver18 *
						compensationRates[combinedPercentage]['additionalChildOver18']
				}
			} else {
				totalCompensation =
					compensationRates[combinedPercentage]['withOneChild']
			}
		} else {
			selectedOptions = selectedOptions.filter(
				(option) => option !== 'withOneChild'
			)
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

	document.querySelectorAll('.optional').forEach(function (element) {
		element.addEventListener('change', function () {
			updateTotalCompensation()
		})
	})
	compensation.innerHTML = '$' + totalCompensation.toFixed(2)
	resultSpan.innerHTML = combinedPercentage + '%'
	console.log(selectedOptions)

	console.log(totalCompensation)

	// Initial calculation when the page loads
	updateTotalCompensation()
}

function clearTotals() {
	document
		.querySelectorAll('input[type="checkbox"]')
		.forEach(function (checkbox) {
			checkbox.checked = false
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

calculateCompensation()
