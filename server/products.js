const products = {
    inventory:[
    {
        id: 1,
        productName: 'Enjoi - Deedz Classic Panda Super Sap', 
        Price: 1.299,
        DiscountedPrice: 1000,
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
        Price: 1.299,
        DiscountedPrice: 1000,
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
        Price: 999.00,
        DiscountedPrice: 1000,
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
        Price: 1.099,
        DiscountedPrice: 1000,
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
        Price: 1.199,
        DiscountedPrice: 1000,
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
        Price: 999.00,
        DiscountedPrice: 1000,
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
        Price: 999.00,
        DiscountedPrice: 1000,
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
        productName: 'KFD - Chill flagship', 
        Price: 949,
        DiscountedPrice: 800,
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
        productName: 'Almost - Yuri silver lining', 
        Price: 1.199,
        DiscountedPrice: 1000,
        inStock: 6, 
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
        id: 10,
        productName: 'Almost - New Pro Silver Lining', 
        Price: 1.199,
        DiscountedPrice: 1000,
        inStock: 2, 
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
], 
};

// Explain here about node modules, the scope and how to access via export

module.exports = products;
