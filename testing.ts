let objInQuest = {
    general: {
        storedLotName: null,
        storedLotNumber: null
    },
    checks: {
        hasMultipleAddresses: true
    },
    address: [
        {
        storedLotStreetNumber: 1233,
        storedLotStreetName: 'Ben',
        storedLotStreetPostal: 'V1231'
    },
        {
        storedLotStreetNumber: 55,
        storedLotStreetName: 'asd',
        storedLotStreetPostal: '141'
    },
        {
        storedLotStreetNumber: 555,
        storedLotStreetName: 'asdads',
        storedLotStreetPostal: 'trh'
    }
    ]
}

let addressesVariables: {newAddresses:any} = {
    newAddresses: [

    ]
}

let newItem = objInQuest.address.map((x) => {
    return {
        "parking_lot_id": 0,
        "street_number": x.storedLotStreetNumber,
        "street_name": x.storedLotStreetName,
        "street_postal_code": x.storedLotStreetPostal
    }
})

addressesVariables.newAddresses.push(newItem)

console.log(newItem)

console.log(addressesVariables.newAddresses)