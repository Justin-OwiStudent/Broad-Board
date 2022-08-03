const products = {
    inventory:[
    {
        id: 1,
        productName: 'Enjoi - Deedz Classic Panda Super Sap', 
        category: "Decks",
        Price: 1.299,
        inStock: 13, 
        availStock: [
            {
                size: 7, 
                qty: 5, 
                variations: [
                    {
                        green: 5,
                    }
                ]
            }, 
            {
                size: 8.25, 
                qty: 10, 
                variations: [
                    {
                        green: 10, 
                    }
                ]
            },
            {
                size: 9, 
                qty: 8, 
                variations: [
                    {
                        green: 8, 
                    }
                ]
            }
        ]       
    },
    {
        id: 2,
        productName: 'Enjoi - Thaynan Classic Panda Super Sap', 
        category: "Decks",
        Price: 1.299,
        inStock: 14, 
        availStock: [
            {
                size: 7, 
                qty: 4, 
                variations: [
                    {
                        Orange: 4, 
                    }
                ]
            },
            {
                size: 8.25, 
                qty: 7, 
                variations: [
                    {
                        Orange: 7, 
                    }
                ]
            },
            {
                size: 9, 
                qty: 3, 
                variations: [
                    {
                        Orange: 3, 
                    }
                ]
            }
        ]       
    },
    {
        id: 3,
        productName: 'Enjoi - Bird Watcher', 
        category: "Decks",
        Price: 999.00,
        inStock: 15, 
        availStock: [
            {
                size: 7, 
                qty: 5, 
                variations: [
                    {
                        blue: 5,
                    }
                ]
            },
            {
                size: 8.25, 
                qty: 3,
                variations: [
                    {
                        blue: 3,
                    }
                ]
            },
            {
                size: 9, 
                qty: 7, 
                variations: [
                    {
                        blue: 7, 
                    }
                ]
            }
        ]       
    },
    {
        id: 4,
        productName: 'Enjoi - Wailin Thirdeye', 
        category: "Decks",
        Price: 1.099,
        inStock: 8, 
        availStock: [
            {
                size: 7, 
                qty: 2, 
                variations: [
                    {
                        yellow: 2,
                    }
                ]
            },
            {
                size: 8.25, 
                qty: 0, 
                variations: [
                    {
                        yellow: 0,
                    }
                ]
            },
            {
                size: 9, 
                qty: 6, 
                variations: [
                    {
                        yellow: 6, 
                    }
                ]
            }
        ]       
    },
    {
        id: 5,
        productName: 'Enjoi - Mullen Round', 
        category: "Decks",
        Price: 1.199,
        inStock: 12, 
        availStock: [
            {
                size: 8.25, 
                qty: 3, 
                variations: [
                    {
                        blue: 3,
                    }
                ]
            }, 
            {
                size: 8.25, 
                qty: 4, 
                variations: [
                    {
                        blue: 4, 
                    }
                ]
            },
            {
                size: 9, 
                qty: 5, 
                variations: [
                    {
                        blue: 5, 
                    }
                ]
            }
        ]       
    },
    {
        id: 6,
        productName: 'Santa Cruz - Lucky Cat', 
        category: "Decks",
        Price: 999.00,
        inStock: 9, 
        availStock: [
            {
                size: 7, 
                qty: 2, 
                variations: [
                    {
                        pink: 2,
                    }
                ]
            }, 
            {
                size: 8.25, 
                qty: 4, 
                variations: [
                    {
                        pink: 4, 
                    }
                ]
            },
            {
                size: 9, 
                qty: 3, 
                variations: [
                    {
                        pink: 3, 
                    }
                ]
            }
        ]       
    },
    {
        id: 7,
        productName: 'Almost - Most HYB', 
        category: "Decks",
        Price: 999.00,
        inStock: 9, 
        availStock: [
            {
                size: 7, 
                qty: 2, 
                variations: [
                    {
                        blue: 2,
                    }
                ]
            }, 
            {
                size: 8.25, 
                qty: 4, 
                variations: [
                    {
                        blue: 4, 
                    }
                ]
            },
            {
                size: 9, 
                qty: 3, 
                variations: [
                    {
                        blue: 3, 
                    }
                ]
            }
        ]       
    },
    {
        id: 8,
        productName: 'Tensor - Alum Stencil Mirror', 
        category: "Trucks",
        Price: 1.199,
        inStock: 6, 
        availStock: [
            {
                size: 5.25, 
                qty: 5, 
                variations: [
                    {
                        blue: 2,
                        green: 2,
                        gold: 1,

                    }
                ]
            }, 
            {
                size: 5.5, 
                qty: 10, 
                variations: [
                    {
                        blue: 3,
                        green: 5,
                        gold: 2,
                    }
                ]
            }
        ]       
    },
    {
        id: 9,
        productName: 'Indapendant - 149 Hollow Mid Lower Hanger', 
        category: "Trucks",
        Price: 1.249,
        inStock: 6, 
        availStock: [
            {
                size: 5.5, 
                qty: 2, 
                variations: [
                    {
                        raw: 2,
                    }
                ]
            }
        ]       
    },
    {
        id: 10,
        productName: 'Ricta - Sparx', 
        category: "Wheels",
        Price: 399.00,
        type: "hard",
        inStock: 2, 
        availStock: [
            {
                size: 54, 
                qty: 2, 
                variations: [
                    {
                        white: 2,
                    }
                ]
            }
        ]       
    },
    {
        id: 10,
        productName: 'Blind - Reaper', 
        category: "Wheels",
        Price: 499.00,
        type: "hard",
        inStock: 4, 
        availStock: [
            {
                size: 52, 
                qty: 4, 
                variations: [
                    {
                        white: 4,
                    }
                ]
            }
        ]       
    },
    {
        id: 11,
        productName: 'sector 9 - 9 ball', 
        category: "Wheels",
        Price: 1.099,
        type: "Soft",
        inStock: 14, 
        availStock: [
            {
                size: 74, 
                qty: 14, 
                variations: [
                    {
                        blue: 4,
                        green: 2,
                        red: 8,

                    }
                ]
            }
        ]       
    },
    {
        id: 12,
        productName: 'Bully Boy - cereal grip tape', 
        category: "Grip",
        Price: 249.00,
        inStock: 14, 
        availStock: [
            {
                size: NA, 
                qty: 5, 
                variations: [
                    {
                       Bully

                    }
                ]
            }
        ]       
    },


], 
};

// Explain here about node modules, the scope and how to access via export

module.exports = products;
