// data from request
let requestResult = {
  'services': [
    {
      'id': 1,
      'head': 0,
      'name': 'Проф.осмотр',
      'node': 0,
      'price': 100.0,
      'sorthead': 20,
    },
    {
      'id': 2,
      'head': 0,
      'name': 'Хирургия',
      'node': 1,
      'price': 0.0,
      'sorthead': 10,
    },
    {
      'id': 3,
      'head': 2,
      'name': 'Удаление зубов',
      'node': 1,
      'price': 0.0,
      'sorthead': 10,
    },
    {
      'id': 4,
      'head': 3,
      'name': 'Удаление зуба',
      'node': 0,
      'price': 800.0,
      'sorthead': 10,
    },
    {
      'id': 5,
      'head': 3,
      'name': 'Удаление 8ого зуба',
      'node': 0,
      'price': 1000.0,
      'sorthead': 30,
    },
    {
      'id': 6,
      'head': 3,
      'name': 'Удаление осколка зуба',
      'node': 0,
      'price': 2000.0,
      'sorthead': 20,
    },
    {
      'id': 7,
      'head': 2,
      'name': 'Хирургические вмешательство',
      'node': 0,
      'price': 200.0,
      'sorthead': 10,
    },
    {
      'id': 8,
      'head': 2,
      'name': 'Имплантация зубов',
      'node': 1,
      'price': 0.0,
      'sorthead': 20,
    },
    {
      'id': 9,
      'head': 8,
      'name': 'Коронка',
      'node': 0,
      'price': 3000.0,
      'sorthead': 10,
    },
    {
      'id': 10,
      'head': 8,
      'name': 'Слепок челюсти',
      'node': 0,
      'price': 500.0,
      'sorthead': 20,
    },
  ],
}

let tree = makeTree(requestResult)

dfs({ id: 0 }, -1)

// making tree out of request results
function makeTree (result) {
  // making 2D array filled with []
  let tree = new Array(result.services.length + 1)
  for (let i = 0; i < tree.length; i++) {
    tree[i] = []
  }

  // fill this arr with result values
  for (let i = 0; i < result.services.length; i++) {
    for (let j = 0; j < result.services.length; j++) {
      if (result.services[j].head === i || (result.services[j].head === null && i === 0)) {
        tree[i].push(result.services[j])
      }
    }
  }

  return tree
}

// printing data with sorting
function dfs (parent, deep) {
  if (deep >= 0) {
    console.log(' '.repeat(deep), `${parent.name} (${parent.price})`)
  }

  tree[parent.id].sort((a, b) => {
    if (a.sorthead > b.sorthead) return 1
    if (a.sorthead < b.sorthead) return -1
    return 0
  })

  for (let i = 0; i < tree[parent.id].length; i++) {
    dfs(tree[parent.id][i], deep + 1)
  }
}
