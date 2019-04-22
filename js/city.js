var city = {
  name: "New City",
  population: 80,
  
  residential: {
    max: 10,
    current: 8,
    demand: 0.1,
    crimeFactor: 1
  },
  commercial: {
    max: 10,
    current: 8,
    demand: 0.1,
    crimeFactor: 1.2
  },
  industrial: {
    max: 10,
    current: 8,
    demand: 0.1,
    crimeFactor: 1.2
  },

  propertyTax: 8,
  salesTax: 8,
  incomeTax: 8,

  happiness: 5,
  pollution: 5,
  tourism: 0,

  transit: {
    demand: undefined,
    have: undefined,
    sources: [
      {
        name: "Road",
        quantity: 10,
        costPer: 0.1,
        transit: 1,
        pollution: 0.05
      }
    ],
  },
  police: {
    demand: undefined,
    have: undefined,
    sources: [
      {
        name: "Police Station",
        quantity: 1,
        costPer: 1,
        police: 1
      }
    ]
  },
  fire: {
    demand: undefined,
    have: undefined,
    sources: [
      {
        name: "Fire Department",
        quantity: 1,
        costPer: 1,
        fire: 1
      }
    ]
  },
  medical: {
    demand: undefined,
    have: undefined,
    sources: [
      {
        name: "Health Clinic",
        quantity: 1,
        costPer: 1.2,
        medical: 1
      }
    ]
  },
  education: {
    demand: undefined,
    have: undefined,
    sources: [
      {
        name: "School",
        quantity: 1,
        costPer: 1,
        education: 1
      }
    ],
  },
  nature: {
    demand: undefined,
    have: undefined,
    sources: [
      {
        name: "Small Park",
        quantity: 1,
        costPer: 0.1,
        nature: 0.3,
        pollution: -0.1
      }
    ]
  },
  water: {
    demand: undefined,
    have: undefined,
    sources: [
      {
        name: "Deal with Neighbor",
        quantity: 1,
        costPer: 1.5,
        water: 1
      }
    ],
    canBuild: [
      {
        name: "Water Tower",
        cost: 50,
        upkeep: 0.3,
        water: 1
      },
      {
        name: "Deal with Neighbor",
        cost: 1.5,
        upkeep: 1.5,
        water: 1
      }
    ]
  },
  electricity: {
    demand: undefined,
    have: undefined,
    sources: [
      {
        name: "Deal with Neighbor",
        quantity: 1,
        costPer: 1.7,
        electricity: 1
      }
    ],
    canBuild: [
      {
        name: "Coal Plant",
        cost: 300,
        upkeep: 3,
        electricity: 10,
        pollution: 8
      },
      {
        name: "Wind Mill",
        cost: 60,
        upkeep: 1,
        electricity: 1,
        pollution: 0.1
      },
      {
        name: "Solar Power Plant",
        cost: 400,
        upkeep: 4,
        electricity: 8,
        pollution: 0.5
      },
      {
        name: "Nuclear Plant",
        cost: 400,
        upkeep: 5,
        electricity: 10,
        pollution: 0.5
      },
      {
        name: "Deal with Neighbor",
        cost: 1.7,
        upkeep: 1.7,
        electricity: 1
      }
    ]
  },

};

