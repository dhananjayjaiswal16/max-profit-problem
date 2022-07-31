const firstTestCase = { time: 7, earning: 3000 }
const secondTestCase = { time: 8, earning: 4500 }
const thirdTestCase = { time: 13, earning: 16500 }

function bussinessRequirement(requirement) {
  let result = []
  const typeOfBussinesses = [{ amenity: 'T', earning: 1500, constructionTime: 5 }, { amenity: 'P', earning: 1000, constructionTime: 4 }, { amenity: 'C', earning: 3000, constructionTime: 10 }]
  for (let i = 0; i < typeOfBussinesses.length; i++) {
    let bussiness = typeOfBussinesses[i]
    if (requirement.time >= bussiness.constructionTime) {
      let totalBussinessRunningTime = 0
      let totalTimeSpentInDevelopment = 0
      let feasibleBusinesses = parseInt(requirement.time / bussiness.constructionTime)
      for (let i = 1; i <= feasibleBusinesses; i++) {
        let bussinessRunningTime = (requirement.time - totalTimeSpentInDevelopment) - bussiness.constructionTime
        totalBussinessRunningTime += bussinessRunningTime
        totalTimeSpentInDevelopment += bussiness.constructionTime
      }
      let totalEarningFromBussiness = totalBussinessRunningTime * bussiness.earning
      if (totalEarningFromBussiness == requirement.earning) {
        let solution = { 'T': 0, 'P': 0, 'C': 0 }
        solution[bussiness.amenity] = feasibleBusinesses
        result.push(solution)
      }
    } else {
      continue
    }
  }
  return result
}

console.log(bussinessRequirement(firstTestCase))
console.log(bussinessRequirement(secondTestCase))
console.log(bussinessRequirement(thirdTestCase))