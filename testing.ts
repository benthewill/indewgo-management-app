let arr = [
    {
        "node": {
            "city_name": "Pelican Town",
            "additional_tax": "0.00",
            "patrol_jurisdiction": "",
            "goods_and_services_tax": "0.05",
            "provincial_transport_tax": "0.24"
        }
    },
    {
        "node": {
            "city_name": "Star Beach",
            "additional_tax": "0.00",
            "patrol_jurisdiction": "",
            "goods_and_services_tax": "0.08",
            "provincial_transport_tax": "0.06"
        }
    },
    {
        "node": {
            "city_name": "Homebound Mountain",
            "additional_tax": "0.00",
            "patrol_jurisdiction": "",
            "goods_and_services_tax": "0.05",
            "provincial_transport_tax": "0.24"
        }
    },
    {
        "node": {
            "city_name": "Calico Desert",
            "additional_tax": "0.05",
            "patrol_jurisdiction": "",
            "goods_and_services_tax": "0.12",
            "provincial_transport_tax": "0.04"
        }
    },
    {
        "node": {
            "city_name": "Sulani Island",
            "additional_tax": "0.05",
            "patrol_jurisdiction": "",
            "goods_and_services_tax": "0.10",
            "provincial_transport_tax": "0.10"
        }
    },
    {
        "node": {
            "city_name": "Komorebi Village",
            "additional_tax": "0.00",
            "patrol_jurisdiction": "",
            "goods_and_services_tax": "0.06",
            "provincial_transport_tax": "0.02"
        }
    }
]

let city = []

let data = arr.map((item) => {
    return {
    label: item.node.city_name,
        value: item.node.additional_tax

    }
})
console.log(data)