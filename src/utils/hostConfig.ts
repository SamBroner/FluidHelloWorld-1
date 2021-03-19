import { HostConfig } from "adaptivecards";

export const outlookConfig = new HostConfig({
    "preExpandSingleShowCardAction": true,
    "supportsInteractivity": true,
    "spacing": {
        "small": 10,
        "default": 20,
        "medium": 30,
        "large": 40,
        "extraLarge": 50,
        "padding": 20
    },
    "separator": {
        "lineThickness": 1,
        "lineColor": "#EEEEEE"
    },
    "imageSizes": {
        "small": 40,
        "medium": 80,
        "large": 160
    },
    "fontTypes": {
        "default": {
            "fontFamily": "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            "fontSizes": {
                "small": 12,
                "default": 14,
                "medium": 17,
                "large": 21,
                "extraLarge": 26
            },
            "fontWeights": {
                "lighter": 200,
                "default": 400,
                "bolder": 600
            }
        },
        "monospace": {
            "fontFamily": "'Courier New', Courier, monospace",
            "fontSizes": {
                "small": 12,
                "default": 14,
                "medium": 17,
                "large": 21,
                "extraLarge": 26
            },
            "fontWeights": {
                "lighter": 200,
                "default": 400,
                "bolder": 600
            }
        }
    },
    "containerStyles": {
        "default": {
            "backgroundColor": "#FFFFFF",
            "foregroundColors": {
                "default": {
                    "default": "#333333",
                    "subtle": "#EE333333"
                },
                "dark": {
                    "default": "#000000",
                    "subtle": "#66000000"
                },
                "light": {
                    "default": "#FFFFFF",
                    "subtle": "#33000000"
                },
                "accent": {
                    "default": "#2E89FC",
                    "subtle": "#882E89FC"
                },
                "attention": {
                    "default": "#cc3300",
                    "subtle": "#DDcc3300"
                },
                "good": {
                    "default": "#028A02",
                    "subtle": "#DD027502"
                },
                "warning": {
                    "default": "#e69500",
                    "subtle": "#DDe69500"
                }
            }
        },
        "emphasis": {
            "backgroundColor": "#08000000",
            "foregroundColors": {
                "default": {
                    "default": "#333333",
                    "subtle": "#EE333333"
                },
                "dark": {
                    "default": "#000000",
                    "subtle": "#66000000"
                },
                "light": {
                    "default": "#FFFFFF",
                    "subtle": "#33000000"
                },
                "accent": {
                    "default": "#2E89FC",
                    "subtle": "#882E89FC"
                },
                "attention": {
                    "default": "#cc3300",
                    "subtle": "#DDcc3300"
                },
                "good": {
                    "default": "#028A02",
                    "subtle": "#DD027502"
                },
                "warning": {
                    "default": "#e69500",
                    "subtle": "#DDe69500"
                }
            }
        },
        "accent": {
            "backgroundColor": "#C7DEF9",
            "foregroundColors": {
                "default": {
                    "default": "#333333",
                    "subtle": "#EE333333"
                },
                "dark": {
                    "default": "#000000",
                    "subtle": "#66000000"
                },
                "light": {
                    "default": "#FFFFFF",
                    "subtle": "#33000000"
                },
                "accent": {
                    "default": "#2E89FC",
                    "subtle": "#882E89FC"
                },
                "attention": {
                    "default": "#cc3300",
                    "subtle": "#DDcc3300"
                },
                "good": {
                    "default": "#028A02",
                    "subtle": "#DD027502"
                },
                "warning": {
                    "default": "#e69500",
                    "subtle": "#DDe69500"
                }
            }
        },
        "good": {
            "backgroundColor": "#CCFFCC",
            "foregroundColors": {
                "default": {
                    "default": "#333333",
                    "subtle": "#EE333333"
                },
                "dark": {
                    "default": "#000000",
                    "subtle": "#66000000"
                },
                "light": {
                    "default": "#FFFFFF",
                    "subtle": "#33000000"
                },
                "accent": {
                    "default": "#2E89FC",
                    "subtle": "#882E89FC"
                },
                "attention": {
                    "default": "#cc3300",
                    "subtle": "#DDcc3300"
                },
                "good": {
                    "default": "#028A02",
                    "subtle": "#DD027502"
                },
                "warning": {
                    "default": "#e69500",
                    "subtle": "#DDe69500"
                }
            }
        },
        "attention": {
            "backgroundColor": "#FFC5B2",
            "foregroundColors": {
                "default": {
                    "default": "#333333",
                    "subtle": "#EE333333"
                },
                "dark": {
                    "default": "#000000",
                    "subtle": "#66000000"
                },
                "light": {
                    "default": "#FFFFFF",
                    "subtle": "#33000000"
                },
                "accent": {
                    "default": "#2E89FC",
                    "subtle": "#882E89FC"
                },
                "attention": {
                    "default": "#cc3300",
                    "subtle": "#DDcc3300"
                },
                "good": {
                    "default": "#028A02",
                    "subtle": "#DD027502"
                },
                "warning": {
                    "default": "#e69500",
                    "subtle": "#DDe69500"
                }
            }
        },
        "warning": {
            "backgroundColor": "#FFE2B2",
            "foregroundColors": {
                "default": {
                    "default": "#333333",
                    "subtle": "#EE333333"
                },
                "dark": {
                    "default": "#000000",
                    "subtle": "#66000000"
                },
                "light": {
                    "default": "#FFFFFF",
                    "subtle": "#33000000"
                },
                "accent": {
                    "default": "#2E89FC",
                    "subtle": "#882E89FC"
                },
                "attention": {
                    "default": "#cc3300",
                    "subtle": "#DDcc3300"
                },
                "good": {
                    "default": "#028A02",
                    "subtle": "#DD027502"
                },
                "warning": {
                    "default": "#e69500",
                    "subtle": "#DDe69500"
                }
            }
        }
    },
    "actions": {
        "maxActions": 5,
        "spacing": "default",
        "buttonSpacing": 10,
        "showCard": {
            "actionMode": "inline",
            "inlineTopMargin": 16
        },
        "actionsOrientation": "horizontal",
        "actionAlignment": "left"
    },
    "adaptiveCard": {
        "allowCustomStyle": true
    },
    "imageSet": {
        "imageSize": "medium",
        "maxImageHeight": 100
    },
    "factSet": {
        "title": {
            "color": "default",
            "size": "default",
            "isSubtle": false,
            "weight": "bolder",
            "wrap": true,
            "maxWidth": 150
        },
        "value": {
            "color": "default",
            "size": "default",
            "isSubtle": false,
            "weight": "default",
            "wrap": true
        },
        "spacing": 10
    }
}
);

export const webChatConfig = new HostConfig({
    "spacing": {
        "small": 3,
        "default": 8,
        "medium": 20,
        "large": 30,
        "extraLarge": 40,
        "padding": 10
    },
    "separator": {
        "lineThickness": 1,
        "lineColor": "#EEEEEE"
    },
    "supportsInteractivity": true,
    "fontTypes": {
        "default": {
            "fontFamily": "Calibri, sans-serif",
            "fontSizes": {
                "small": 12,
                "default": 14,
                "medium": 17,
                "large": 21,
                "extraLarge": 26
            },
            "fontWeights": {
                "lighter": 200,
                "default": 400,
                "bolder": 600
            }
        },
        "monospace": {
            "fontFamily": "'Courier New', Courier, monospace",
            "fontSizes": {
                "small": 12,
                "default": 14,
                "medium": 17,
                "large": 21,
                "extraLarge": 26
            },
            "fontWeights": {
                "lighter": 200,
                "default": 400,
                "bolder": 600
            }
        }
    },
    "containerStyles": {
        "default": {
            "backgroundColor": "#FFFFFF",
            "foregroundColors": {
                "default": {
                    "default": "#000000",
                    "subtle": "#6f6f6f"
                },
                "accent": {
                    "default": "#0063B1",
                    "subtle": "#0063B1"
                },
                "attention": {
                    "default": "#EC130E",
                    "subtle": "#DDEC130E"
                },
                "good": {
                    "default": "#028A02",
                    "subtle": "#DD028A02"
                },
                "light": {
                    "default": "#646464",
                    "subtle": "#767676"
                },
                "warning": {
                    "default": "#B75C00",
                    "subtle": "#DDB75C00"
                }
            }
        },
        "emphasis": {
            "backgroundColor": "#F9F9F9",
            "foregroundColors": {
                "default": {
                    "default": "#000000",
                    "subtle": "#6f6f6f"
                },
                "accent": {
                    "default": "#1F6BF1",
                    "subtle": "#881F6BF1"
                },
                "attention": {
                    "default": "#E31B13",
                    "subtle": "#DDE31B13"
                },
                "good": {
                    "default": "#0D860A",
                    "subtle": "#DD0D860A"
                },
                "warning": {
                    "default": "#BD5400",
                    "subtle": "#DDBD5400"
                },
                "light": {
                    "default": "#737373",
                    "subtle": "#DD737373"
                }
            }
        },
        "accent": {
            "backgroundColor": "#D7E7FA",
            "foregroundColors": {
                "default": {
                    "default": "#333333",
                    "subtle": "#EE333333"
                },
                "dark": {
                    "default": "#000000",
                    "subtle": "#66000000"
                },
                "light": {
                    "default": "#646464",
                    "subtle": "#33646464"
                },
                "accent": {
                    "default": "#145FDD",
                    "subtle": "#88145FDD"
                },
                "attention": {
                    "default": "#C42C07",
                    "subtle": "#DDC42C07"
                },
                "good": {
                    "default": "#0B7814",
                    "subtle": "#DD0B7814"
                },
                "warning": {
                    "default": "#935A10",
                    "subtle": "#DD935A10"
                }
            }
        },
        "good": {
            "backgroundColor": "#CCFFCC",
            "foregroundColors": {
                "default": {
                    "default": "#333333",
                    "subtle": "#EE333333"
                },
                "dark": {
                    "default": "#000000",
                    "subtle": "#66000000"
                },
                "light": {
                    "default": "#6E6E6E",
                    "subtle": "#336E6E6E"
                },
                "accent": {
                    "default": "#2168E4",
                    "subtle": "#882168E4"
                },
                "attention": {
                    "default": "#CC3300",
                    "subtle": "#DDCC3300"
                },
                "good": {
                    "default": "#0F8109",
                    "subtle": "#DD0F8109"
                },
                "warning": {
                    "default": "#9A630D",
                    "subtle": "#DD9A630D"
                }
            }
        },
        "attention": {
            "backgroundColor": "#FFC5B2",
            "foregroundColors": {
                "default": {
                    "default": "#333333",
                    "subtle": "#EE333333"
                },
                "dark": {
                    "default": "#000000",
                    "subtle": "#66000000"
                },
                "light": {
                    "default": "#5A5A5A",
                    "subtle": "#335A5A5A"
                },
                "accent": {
                    "default": "#0854C5",
                    "subtle": "#880854C5"
                },
                "attention": {
                    "default": "#A92E0E",
                    "subtle": "#DDA92E0E"
                },
                "good": {
                    "default": "#256824",
                    "subtle": "#DD256824"
                },
                "warning": {
                    "default": "#775502",
                    "subtle": "#DD775502"
                }
            }
        },
        "warning": {
            "backgroundColor": "#FFE2B2",
            "foregroundColors": {
                "default": {
                    "default": "#333333",
                    "subtle": "#EE333333"
                },
                "dark": {
                    "default": "#000000",
                    "subtle": "#66000000"
                },
                "light": {
                    "default": "#646464",
                    "subtle": "#33646464"
                },
                "accent": {
                    "default": "#0F60DC",
                    "subtle": "#880F60DC"
                },
                "attention": {
                    "default": "#BF3505",
                    "subtle": "#DDBF3505"
                },
                "good": {
                    "default": "#207725",
                    "subtle": "#DD207725"
                },
                "warning": {
                    "default": "#866107",
                    "subtle": "#DD866107"
                }
            }
        }
    },
    "imageSizes": {
        "small": 40,
        "medium": 80,
        "large": 160
    },
    "actions": {
        "maxActions": 100,
        "spacing": "default",
        "buttonSpacing": 8,
        "showCard": {
            "actionMode": "inline",
            "inlineTopMargin": 8
        },
        "actionsOrientation": "vertical",
        "actionAlignment": "stretch"
    },
    "adaptiveCard": {
        "allowCustomStyle": false
    },
    "imageSet": {
        "imageSize": "medium",
        "maxImageHeight": 100
    },
    "factSet": {
        "title": {
            "color": "default",
            "size": "default",
            "isSubtle": false,
            "weight": "bolder",
            "wrap": true,
            "maxWidth": 150
        },
        "value": {
            "color": "default",
            "size": "default",
            "isSubtle": false,
            "weight": "default",
            "wrap": true
        },
        "spacing": 8
    }
});

export const teamsLightConfig = new HostConfig({
    "choiceSetInputValueSeparator": ",",
    "supportsInteractivity": true,
    "spacing": {
        "small": 8,
        "default": 12,
        "medium": 16,
        "large": 20,
        "extraLarge": 24,
        "padding": 16
    },
    "separator": {
        "lineThickness": 1,
        "lineColor": "#EEEEEE"
    },
    "imageSizes": {
        "small": 32,
        "medium": 52,
        "large": 100
    },
    "fontTypes": {
        "default": {
            "fontFamily": "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            "fontSizes": {
                "small": 12,
                "default": 14,
                "medium": 14,
                "large": 18,
                "extraLarge": 24
            },
            "fontWeights": {
                "lighter": 200,
                "default": 400,
                "bolder": 600
            }
        },
        "monospace": {
            "fontFamily": "'Courier New', Courier, monospace",
            "fontSizes": {
                "small": 12,
                "default": 14,
                "medium": 14,
                "large": 18,
                "extraLarge": 24
            },
            "fontWeights": {
                "lighter": 200,
                "default": 400,
                "bolder": 600
            }
        }
    },
    "containerStyles": {
        "default": {
            "foregroundColors": {
                "default": {
                    "default": "#ff252424",
                    "subtle": "#bf252424"
                },
                "dark": {
                    "default": "#252424",
                    "subtle": "#bf252424"
                },
                "light": {
                    "default": "#ffffff",
                    "subtle": "#fff3f2f1"
                },
                "accent": {
                    "default": "#6264a7",
                    "subtle": "#8b8cc7"
                },
                "good": {
                    "default": "#92c353",
                    "subtle": "#e592c353"
                },
                "warning": {
                    "default": "#f8d22a",
                    "subtle": "#e5f8d22a"
                },
                "attention": {
                    "default": "#c4314b",
                    "subtle": "#e5c4314b"
                }
            },
            "backgroundColor": "#ffffff"
        },
        "emphasis": {
            "foregroundColors": {
                "default": {
                    "default": "#ff252424",
                    "subtle": "#bf252424"
                },
                "dark": {
                    "default": "#252424",
                    "subtle": "#bf252424"
                },
                "light": {
                    "default": "#ffffff",
                    "subtle": "#fff3f2f1"
                },
                "accent": {
                    "default": "#6264a7",
                    "subtle": "#8b8cc7"
                },
                "good": {
                    "default": "#92c353",
                    "subtle": "#e592c353"
                },
                "warning": {
                    "default": "#f8d22a",
                    "subtle": "#e5f8d22a"
                },
                "attention": {
                    "default": "#c4314b",
                    "subtle": "#e5c4314b"
                }
            },
            "backgroundColor": "#fff9f8f7"
        },
        "accent": {
            "backgroundColor": "#C7DEF9",
            "foregroundColors": {
                "default": {
                    "default": "#ff252424",
                    "subtle": "#bf252424"
                },
                "dark": {
                    "default": "#252424",
                    "subtle": "#bf252424"
                },
                "light": {
                    "default": "#ffffff",
                    "subtle": "#fff3f2f1"
                },
                "accent": {
                    "default": "#6264a7",
                    "subtle": "#8b8cc7"
                },
                "good": {
                    "default": "#92c353",
                    "subtle": "#e592c353"
                },
                "warning": {
                    "default": "#f8d22a",
                    "subtle": "#e5f8d22a"
                },
                "attention": {
                    "default": "#c4314b",
                    "subtle": "#e5c4314b"
                }
            }
        },
        "good": {
            "backgroundColor": "#CCFFCC",
            "foregroundColors": {
                "default": {
                    "default": "#ff252424",
                    "subtle": "#bf252424"
                },
                "dark": {
                    "default": "#252424",
                    "subtle": "#bf252424"
                },
                "light": {
                    "default": "#ffffff",
                    "subtle": "#fff3f2f1"
                },
                "accent": {
                    "default": "#6264a7",
                    "subtle": "#8b8cc7"
                },
                "good": {
                    "default": "#92c353",
                    "subtle": "#e592c353"
                },
                "warning": {
                    "default": "#f8d22a",
                    "subtle": "#e5f8d22a"
                },
                "attention": {
                    "default": "#c4314b",
                    "subtle": "#e5c4314b"
                }
            }
        },
        "attention": {
            "backgroundColor": "#FFC5B2",
            "foregroundColors": {
                "default": {
                    "default": "#ff252424",
                    "subtle": "#bf252424"
                },
                "dark": {
                    "default": "#252424",
                    "subtle": "#bf252424"
                },
                "light": {
                    "default": "#ffffff",
                    "subtle": "#fff3f2f1"
                },
                "accent": {
                    "default": "#6264a7",
                    "subtle": "#8b8cc7"
                },
                "good": {
                    "default": "#92c353",
                    "subtle": "#e592c353"
                },
                "warning": {
                    "default": "#f8d22a",
                    "subtle": "#e5f8d22a"
                },
                "attention": {
                    "default": "#c4314b",
                    "subtle": "#e5c4314b"
                }
            }
        },
        "warning": {
            "backgroundColor": "#FFE2B2",
            "foregroundColors": {
                "default": {
                    "default": "#ff252424",
                    "subtle": "#bf252424"
                },
                "dark": {
                    "default": "#252424",
                    "subtle": "#bf252424"
                },
                "light": {
                    "default": "#ffffff",
                    "subtle": "#fff3f2f1"
                },
                "accent": {
                    "default": "#6264a7",
                    "subtle": "#8b8cc7"
                },
                "good": {
                    "default": "#92c353",
                    "subtle": "#e592c353"
                },
                "warning": {
                    "default": "#f8d22a",
                    "subtle": "#e5f8d22a"
                },
                "attention": {
                    "default": "#c4314b",
                    "subtle": "#e5c4314b"
                }
            }
        }
    },
    "actions": {
        "maxActions": 6,
        "spacing": "Default",
        "buttonSpacing": 8,
        "showCard": {
            "actionMode": "Inline",
            "inlineTopMargin": 16,
            "style": "emphasis"
        },
        "preExpandSingleShowCardAction": false,
        "actionsOrientation": "Horizontal",
        "actionAlignment": "Left"
    },
    "adaptiveCard": {
        "allowCustomStyle": false
    },
    "imageSet": {
        "imageSize": "Medium",
        "maxImageHeight": 100
    },
    "factSet": {
        "title": {
            "size": "Default",
            "color": "Default",
            "isSubtle": false,
            "weight": "Bolder",
            "warp": true
        },
        "value": {
            "size": "Default",
            "color": "Default",
            "isSubtle": false,
            "weight": "Default",
            "warp": true
        },
        "spacing": 16
    }
});

export const teamsDarkConfig = new HostConfig({
    "choiceSetInputValueSeparator": ",",
    "supportsInteractivity": true,
    "spacing": {
        "small": 8,
        "default": 12,
        "medium": 16,
        "large": 20,
        "extraLarge": 24,
        "padding": 16
    },
    "separator": {
        "lineThickness": 1,
        "lineColor": "#EEEEEE"
    },
    "fontTypes": {
        "default": {
            "fontFamily": "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            "fontSizes": {
                "small": 12,
                "default": 14,
                "medium": 14,
                "large": 18,
                "extraLarge": 24
            },
            "fontWeights": {
                "lighter": 200,
                "default": 400,
                "bolder": 600
            }
        },
        "monospace": {
            "fontFamily": "'Courier New', Courier, monospace",
            "fontSizes": {
                "small": 12,
                "default": 14,
                "medium": 14,
                "large": 18,
                "extraLarge": 24
            },
            "fontWeights": {
                "lighter": 200,
                "default": 400,
                "bolder": 600
            }
        }
    },
    "imageSizes": {
        "small": 32,
        "medium": 52,
        "large": 100
    },
    "containerStyles": {
        "default": {
            "foregroundColors": {
                "default": {
                    "default": "#ffffffff",
                    "subtle": "#bfffffff"
                },
                "dark": {
                    "default": "#ff201f1f",
                    "subtle": "#ff2d2c2c"
                },
                "light": {
                    "default": "#ffffffff",
                    "subtle": "#bfffffff"
                },
                "accent": {
                    "default": "#ffa6a7dc",
                    "subtle": "#ff8b8cc7"
                },
                "good": {
                    "default": "#ff92c353",
                    "subtle": "#e592c353"
                },
                "warning": {
                    "default": "#fff8d22a",
                    "subtle": "#e5f8d22a"
                },
                "attention": {
                    "default": "#ffd74654",
                    "subtle": "#e5d74654"
                }
            },
            "backgroundColor": "#ff2d2c2c"
        },
        "emphasis": {
            "foregroundColors": {
                "default": {
                    "default": "#ffffffff",
                    "subtle": "#bfffffff"
                },
                "dark": {
                    "default": "#ff201f1f",
                    "subtle": "#ff2d2c2c"
                },
                "light": {
                    "default": "#ffffffff",
                    "subtle": "#bfffffff"
                },
                "accent": {
                    "default": "#ffa6a7dc",
                    "subtle": "#ff8b8cc7"
                },
                "good": {
                    "default": "#ff92c353",
                    "subtle": "#e592c353"
                },
                "warning": {
                    "default": "#fff8d22a",
                    "subtle": "#e5f8d22a"
                },
                "attention": {
                    "default": "#ffd74654",
                    "subtle": "#e5d74654"
                }
            },
            "backgroundColor": "#ff292828"
        },
        "accent": {
            "backgroundColor": "#C7DEF9",
            "foregroundColors": {
                "default": {
                    "default": "#ff201f1f",
                    "subtle": "#ff2d2c2c"
                },
                "dark": {
                    "default": "#ff201f1f",
                    "subtle": "#ff2d2c2c"
                },
                "light": {
                    "default": "#ffffffff",
                    "subtle": "#bfffffff"
                },
                "accent": {
                    "default": "#ffa6a7dc",
                    "subtle": "#ff8b8cc7"
                },
                "good": {
                    "default": "#ff92c353",
                    "subtle": "#e592c353"
                },
                "warning": {
                    "default": "#fff8d22a",
                    "subtle": "#e5f8d22a"
                },
                "attention": {
                    "default": "#ffd74654",
                    "subtle": "#e5d74654"
                }
            }
        },
        "good": {
            "backgroundColor": "#CCFFCC",
            "foregroundColors": {
                "default": {
                    "default": "#ff201f1f",
                    "subtle": "#ff2d2c2c"
                },
                "dark": {
                    "default": "#ff201f1f",
                    "subtle": "#ff2d2c2c"
                },
                "light": {
                    "default": "#ffffffff",
                    "subtle": "#bfffffff"
                },
                "accent": {
                    "default": "#ffa6a7dc",
                    "subtle": "#ff8b8cc7"
                },
                "good": {
                    "default": "#ff92c353",
                    "subtle": "#e592c353"
                },
                "warning": {
                    "default": "#fff8d22a",
                    "subtle": "#e5f8d22a"
                },
                "attention": {
                    "default": "#ffd74654",
                    "subtle": "#e5d74654"
                }
            }
        },
        "attention": {
            "backgroundColor": "#FFC5B2",
            "foregroundColors": {
                "default": {
                    "default": "#ff201f1f",
                    "subtle": "#ff2d2c2c"
                },
                "dark": {
                    "default": "#ff201f1f",
                    "subtle": "#ff2d2c2c"
                },
                "light": {
                    "default": "#ffffffff",
                    "subtle": "#bfffffff"
                },
                "accent": {
                    "default": "#ffa6a7dc",
                    "subtle": "#ff8b8cc7"
                },
                "good": {
                    "default": "#ff92c353",
                    "subtle": "#e592c353"
                },
                "warning": {
                    "default": "#fff8d22a",
                    "subtle": "#e5f8d22a"
                },
                "attention": {
                    "default": "#ffd74654",
                    "subtle": "#e5d74654"
                }
            }
        },
        "warning": {
            "backgroundColor": "#FFE2B2",
            "foregroundColors": {
                "default": {
                    "default": "#ff201f1f",
                    "subtle": "#ff2d2c2c"
                },
                "dark": {
                    "default": "#ff201f1f",
                    "subtle": "#ff2d2c2c"
                },
                "light": {
                    "default": "#ffffffff",
                    "subtle": "#bfffffff"
                },
                "accent": {
                    "default": "#ffa6a7dc",
                    "subtle": "#ff8b8cc7"
                },
                "good": {
                    "default": "#ff92c353",
                    "subtle": "#e592c353"
                },
                "warning": {
                    "default": "#fff8d22a",
                    "subtle": "#e5f8d22a"
                },
                "attention": {
                    "default": "#ffd74654",
                    "subtle": "#e5d74654"
                }
            }
        }
    },
    "actions": {
        "maxActions": 6,
        "spacing": "Default",
        "buttonSpacing": 8,
        "showCard": {
            "actionMode": "Inline",
            "inlineTopMargin": 16,
            "style": "emphasis"
        },
        "preExpandSingleShowCardAction": false,
        "actionsOrientation": "Horizontal",
        "actionAlignment": "Left"
    },
    "adaptiveCard": {
        "allowCustomStyle": false
    },
    "imageSet": {
        "imageSize": "Medium",
        "maxImageHeight": 100
    },
    "factSet": {
        "title": {
            "size": "Default",
            "color": "Default",
            "isSubtle": false,
            "weight": "Bolder",
            "warp": true
        },
        "value": {
            "size": "Default",
            "color": "Default",
            "isSubtle": false,
            "weight": "Default",
            "warp": true
        },
        "spacing": 16
    }
});