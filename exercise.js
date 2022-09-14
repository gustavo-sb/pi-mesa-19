const people = [
  {
    height: 1.75,
    gender: 'M'
  },
  {
    height: 1.80,
    gender: 'F'
  },
  {
    height: 1.85,
    gender: 'M'
  },
  {
    height: 1.90,
    gender: 'F'
  },
  {
    height: 1.95,
    gender: 'M'
  },
  {
    height: 2,
    gender: 'F'
  },
  {
    height: 1.70,
    gender: 'M'
  },
  {
    height: 1.65,
    gender: 'F'
  },
]

const heighterSmaller = (people) => {
  const justHeight = people.map((person) => {
    return person.height
  })

  const heighter = justHeight.reduce((a, b) => {
    return Math.max(a, b)
  })

  const smaller = justHeight.reduce((a, b) => {
    return Math.min(a, b)
  })

  console.log(`heighter: ${heighter} and smaller: ${smaller}`)
}

const averageHeightFemale = (people) => {
  let totalHeight = 0

  const justFemale = people.filter((person) => {
    if (person.gender === 'F') {
      return person
    }
  })

  justFemale.forEach((person) => {
    totalHeight = totalHeight + person.height
  })

  console.log(totalHeight / justFemale.length)
}

const countMale = (people) => {
  const justMale = people.filter((person) => {
    if (person.gender === 'M') {
      return person
    }
  })

  console.log(justMale.length)
}

heighterSmaller(people)
averageHeightFemale(people)
countMale(people)
