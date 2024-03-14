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


document.querySelectorAll('.body-part').forEach(function (part) {
	part.addEventListener('change', function () {
		calculate()
	})
})

document.querySelectorAll('.percentage').forEach(function (percentage) {
	percentage.addEventListener('change', function () {
		calculate()
	})
})

document.querySelectorAll('.optional').forEach(function (optional) {
	optional.addEventListener('change', function () {
		calculate()
	})
})

var resultSpan = document.getElementById('result')

function calculateCompensation() {
	var disabilities = []
	var bilateralDisabilities = []
	var limbChecked = false
	var limb

	document.querySelectorAll('.body-part:checked').forEach(function (bodyPart) {
		limbChecked = true
		limb = bodyPart.getAttribute('data-body-limb')
	})

	// If a body-part checkbox is checked, loop through the percentage checkboxes
	if (limbChecked) {
		document
			.querySelectorAll('.percentage:checked')
			.forEach(function (percentage) {
				var value = parseInt(percentage.value)
				disabilities.push(value)
				if (disabilities.length > 1 && limb.length > 1) {
					disabilities.forEach(function (disability) {
						bilateralDisabilities.push(disability) // Push each disability to bilateralDisabilities
					})
				}
			})
	}

	console.log(limb)
	console.log(disabilities)
	console.log(bilateralDisabilities)

	var combinedPercentage =
		disabilities.reduce(function (acc, cur) {
			return acc * (1 - cur / 100)
		}, 1) * 100
	combinedPercentage = 100 - combinedPercentage
	combinedPercentage = Math.round(combinedPercentage / 10) * 10

	if (bilateralDisabilities.length > 1) {
		var bilateralCombined =
			bilateralDisabilities.reduce(function (acc, cur) {
				return acc * (1 - cur / 100)
			}, 1) * 100
		bilateralCombined = 100 - bilateralCombined
		bilateralCombined = Math.round(bilateralCombined)
		var bilateralCombinedTotal =
			Math.round((bilateralCombined * 0.1 + bilateralCombined) / 10) * 10
		combinedPercentage =
			Math.round((combinedPercentage + bilateralCombinedTotal) / 2 / 10) * 10
	}

	var selectedOptions = []
	document.querySelectorAll('.optional:checked').forEach(function (optional) {
		selectedOptions.push(optional.id)
	})

	// Default to single rate
	var totalCompensation = compensationRates[combinedPercentage]['single']
	console.log(totalCompensation)

	// Watch dropdowns for changes
	function updateTotalCompensation() {
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
      }
      if (childrenUnder18 > 1) {
        var additionalChildUnder18 = childrenUnder18 - 1
        if (additionalChildUnder18 > 0) {
          totalCompensation +=
            additionalChildUnder18 *
            compensationRates[combinedPercentage]['additionalChildUnder18']
        }
      } else {
        totalCompensation = compensationRates[combinedPercentage]['withOneChild']
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
      totalCompensation = compensationRates[combinedPercentage]['withOneChild']
    }
		} else {
			selectedOptions = selectedOptions.filter(
				(option) => option !== 'withOneChild'
			)
		}

		// Concatenate selected options to match in the compensationRates object
		var concatenatedOptions = selectedOptions.join('')
		console.log(selectedOptions)

		// Adjust based on selected options
		if (compensationRates[combinedPercentage][concatenatedOptions]) {
			totalCompensation =
				compensationRates[combinedPercentage][concatenatedOptions]
		}

		// Update total compensation display
		var compensation = document.getElementById('compensation')
		compensation.innerHTML = '$' + totalCompensation.toFixed(2)
	}

	document
		.getElementById('childrenUnder18')
		.addEventListener('change', updateTotalCompensation)
	document
		.getElementById('childrenOver18')
		.addEventListener('change', updateTotalCompensation)

	// Concatenate selected options to match in the compensationRates object
	var concatenatedOptions = selectedOptions.join('')
	console.log(selectedOptions)

	// Adjust based on selected options
	if (compensationRates[combinedPercentage][concatenatedOptions]) {
		totalCompensation =
			compensationRates[combinedPercentage][concatenatedOptions]
	}

	console.log(totalCompensation)

var compensation = document.getElementById('compensation')
compensation.innerHTML = '$' + totalCompensation.toFixed(2)

resultSpan.innerHTML = combinedPercentage + '%'
}


// Call the function whenever there's a change in the checkboxes or dropdowns
document
	.querySelectorAll('.optional, .body-part, .percentage')
	.forEach(function (element) {
		element.addEventListener('change', function () {
			calculateCompensation()
		})
	})

// clear all selections
document
	.getElementById('clearSelections')
	.addEventListener('click', function () {
		// Clear all checkboxes
		document
			.querySelectorAll('input[type="checkbox"]')
			.forEach(function (checkbox) {
				checkbox.checked = false
				checkbox.parentElement.classList.remove('checked')
			})
		

		// Reset dropdowns to default value
		document.getElementById('childrenUnder18').value = '0'
		document.getElementById('childrenOver18').value = '0'
		compensation.innerHTML = '0.00'
		resultSpan.innerHTML = '0'

		calculateCompensation()
	})

	// Add a class to the parent label when the checkbox is checked
document.querySelectorAll('input[type="checkbox"]').forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            checkbox.parentElement.classList.add('checked');
        } else {
            checkbox.parentElement.classList.remove('checked');
        }
    });
});