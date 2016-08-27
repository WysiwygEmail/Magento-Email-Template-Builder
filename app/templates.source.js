var myapp = angular.module('myApp', ['ui.router', 'summernote', 'colorpicker.module'])
myapp.config(function($stateProvider){
    $stateProvider
        .state('index', {
        url: "",
        views: {
            "homepage": {
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/pages/homepage.html"
            },
            "editor": {
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/editor-explain.html"
            }
        }
    })
        .state('one', {
        url: "/one",
        views: {
            "template": {
                controller: "OneTemplateCtrl as onetemplate",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/one/template.html"
            },
            "editor": {
                controller: "OneTemplateCtrl as oneeditor",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/one/editor.html"
            }

        }
    })
        .state('two', {
        url: "/two",
        views: {
            "template": {
                controller: "TwoTemplateCtrl as twotemplate",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/two/template.html"
            },
            "editor": {
                controller: "TwoTemplateCtrl as twoeditor",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/two/editor.html"
            }

        }
    })
        .state('three', {
        url: "/three",
        views: {
            "template": {
                controller: "ThreeTemplateCtrl as threetemplate",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/three/template.html"
            },
            "editor": {
                controller: "ThreeTemplateCtrl as threeeditor",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/three/editor.html"
            }

        }
    })
        .state('four', {
        url: "/four",
        views: {
            "template": {
                controller: "FourTemplateCtrl as fourtemplate",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/four/template.html"
            },
            "editor": {
                controller: "FourTemplateCtrl as foureditor",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/four/editor.html"
            }

        }
    })
        .state('five', {
        url: "/five",
        views: {
            "template": {
                controller: "FiveTemplateCtrl as fivetemplate",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/five/template.html"
            },
            "editor": {
                controller: "FiveTemplateCtrl as fiveeditor",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/five/editor.html"
            }

        }
    })
        .state('six', {
        url: "/six",
        views: {
            "template": {
                controller: "SixTemplateCtrl as sixtemplate",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/six/template.html"
            },
            "editor": {
                controller: "SixTemplateCtrl as sixeditor",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/six/editor.html"
            }

        }
    })
        .state('seven', {
        url: "/seven",
        views: {
            "template": {
                controller: "SevenTemplateCtrl as seventemplate",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/seven/template.html"
            },
            "editor": {
                controller: "SevenTemplateCtrl as seveneditor",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/seven/editor.html"
            }

        }
    })
        .state('eight', {
        url: "/eight",
        views: {
            "template": {
                controller: "EightTemplateCtrl as eighttemplate",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/eight/template.html"
            },
            "editor": {
                controller: "EightTemplateCtrl as eighteditor",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/eight/editor.html"
            }

        }
    })
        .state('nine', {
        url: "/nine",
        views: {
            "template": {
                controller: "NineTemplateCtrl as ninetemplate",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/nine/template.html"
            },
            "editor": {
                controller: "NineTemplateCtrl as nineeditor",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/nine/editor.html"
            }

        }
    })
        .state('ten', {
        url: "/ten",
        views: {
            "template": {
                controller: "TenTemplateCtrl as tentemplate",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/ten/template.html"
            },
            "editor": {
                controller: "TenTemplateCtrl as teneditor",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/ten/editor.html"
            }

        }
    })
        .state('eleven', {
        url: "/eleven",
        views: {
            "template": {
                controller: "ElevenTemplateCtrl as eleventemplate",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/eleven/template.html"
            },
            "editor": {
                controller: "ElevenTemplateCtrl as eleveneditor",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/eleven/editor.html"
            }

        }
    })
        .state('twelve', {
        url: "/twelve",
        views: {
            "template": {
                controller: "TwelveTemplateCtrl as twelvetemplate",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/twelve/template.html"
            },
            "editor": {
                controller: "TwelveTemplateCtrl as twelveeditor",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/twelve/editor.html"
            }

        }
    })
        .state('thirteen', {
        url: "/thirteen",
        views: {
            "template": {
                controller: "ThirteenTemplateCtrl as thirteentemplate",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/thirteen/template.html"
            },
            "editor": {
                controller: "ThirteenTemplateCtrl as thirteeneditor",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/thirteen/editor.html"
            }

        }
    })
        .state('fourteen', {
        url: "/fourteen",
        views: {
            "template": {
                controller: "FourteenTemplateCtrl as fourteentemplate",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/fourteen/template.html"
            },
            "editor": {
                controller: "FourteenTemplateCtrl as fourteeneditor",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/fourteen/editor.html"
            }

        }
    })
        .state('fifteen', {
        url: "/fifteen",
        views: {
            "template": {
                controller: "FifteenTemplateCtrl as fifteentemplate",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/fifteen/template.html"
            },
            "editor": {
                controller: "FifteenTemplateCtrl as fifteeneditor",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/fifteen/editor.html"
            }

        }
    })
        .state('sixteen', {
        url: "/sixteen",
        views: {
            "template": {
                controller: "SixteenTemplateCtrl as sixteentemplate",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/sixteen/template.html"
            },
            "editor": {
                controller: "SixteenTemplateCtrl as sixteeneditor",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/sixteen/editor.html"
            }

        }
    })
        .state('seventeen', {
        url: "/seventeen",
        views: {
            "template": {
                controller: "SeventeenTemplateCtrl as seventeentemplate",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/seventeen/template.html"
            },
            "editor": {
                controller: "SeventeenTemplateCtrl as seventeeneditor",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/seventeen/editor.html"
            }

        }
    })
        .state('eighteen', {
        url: "/eighteen",
        views: {
            "template": {
                controller: "EighteenTemplateCtrl as eighteentemplate",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/eighteen/template.html"
            },
            "editor": {
                controller: "EighteenTemplateCtrl as eighteeneditor",
                templateUrl: "wp-content/themes/wysiwyg/editor/magento/templates/eighteen/editor.html"
            }

        }
    })

})

/*
**
** Slúži na načítanie a vypnutie LOADINGU
** ked sa načítava VIEW, tak pridá class a ked je VIEW načítané, tak class odobere.
** +++++++ klikne na dropdown-style aby sa menu zatvorilo po načítaní... samé sa nezatvára.
**
*/
.run(function($rootScope){
    $rootScope.$on('$viewContentLoading', 
        function(event, viewConfig){ 
        $( "#loader" ).addClass( "loader" );
    });

    $rootScope.$on('$viewContentLoaded', 
        function(event){
        $("#loader").removeClass( "loader" );
        $("#dropdown-style").click();
    });

})

/*
**
** Následujú kontrolery a ich zdielanie medzi sebou
** {{fiorlytemplate.fiorly.message}} a {{fiorlyeditor.fiorly.message}}
**
*/


/* 
One Shared Controller 
*/
    .service("one", function One() {
    var one = this;
    
    one.color_bgcolor = "#f1f1f1"; // {{onetemplate.one.color_bgcolor}}
    one.color_contentbg = "#ffffff"; // {{onetemplate.one.color_contentbg}}
    
    one.image_logourl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/1/logo.png"; // {{onetemplate.one.image_logourl}}
    one.image_logowidth = "200"; // {{onetemplate.one.image_logowidth}}
    one.image_logoheight = "59"; // {{onetemplate.one.image_logoheight}}
    
    one.font_fontfamily = "Helvetica, Arial, sans-serif"; // {{onetemplate.one.font_fontfamily}}
    one.font_color = "#666666"; // {{onetemplate.one.font_color}}
    one.font_link = "#666666"; // {{onetemplate.one.font_link}}
    one.font_linksize = "13"; // {{onetemplate.one.font_linksize}}
    one.font_footercolor = "#666666"; // {{onetemplate.one.font_footercolor}}
    one.font_footerfontsize = "11"; // {{onetemplate.one.font_footerfontsize}}
    
    one.content_color = "#555555"; // {{onetemplate.one.content_color}}
    one.content_link = "#3B99BB"; // {{onetemplate.one.content_link}}
    one.content_paragraph = "14"; // {{onetemplate.one.content_paragraph}}
    one.content_heading1 = "22"; // {{onetemplate.one.content_heading1}}
    one.content_heading1color = "#3B99BB"; // {{onetemplate.one.content_heading1color}}
    one.content_heading2 = "20"; // {{onetemplate.one.content_heading2}}
    one.content_heading2color = "#666666"; // {{onetemplate.one.content_heading2color}}
    one.content_heading3 = "30"; // {{onetemplate.one.content_heading3}}
    one.content_heading3color = "#666666"; // {{onetemplate.one.content_heading3color}}
    one.content_heading4 = "18"; // {{onetemplate.one.content_heading4}}
    one.content_heading5 = "16"; // {{onetemplate.one.content_heading5}}
    one.content_heading6 = "14"; // {{onetemplate.one.content_heading6}}

})
    .controller("OneTemplateCtrl", function OneTemplateCtrl(one) {
    var onetemplate = this;

    onetemplate.one = one;
})
    .controller("OneEditorCtrl", function OneEditorCtrl(one) {
    var oneeditor = this;

    oneeditor.one = one;
})

/* 
Two Shared Controller
*/
    .service("two", function Two() {
    var two = this;

    two.color_bgcolor = "#f0f0f0"; // {{twotemplate.two.color_bgcolor}}
    two.color_contentbg = "#ffffff"; // {{twotemplate.two.color_contentbg}}
    
    two.image_logourl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/2/logo.png"; // {{twotemplate.two.image_logourl}}
    two.image_logowidth = "42"; // {{twotemplate.two.image_logowidth}}
    two.image_logoheight = "42"; // {{twotemplate.two.image_logoheight}}
    two.image_logo2url = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/2/logo.png"; // {{twotemplate.two.image_logo2url}}
    two.image_logo2width = "30"; // {{twotemplate.two.image_logo2width}}
    two.image_logo2height = "30"; // {{twotemplate.two.image_logo2height}}
    two.image_copyrighturl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/2/copyright.png"; // {{twotemplate.two.image_copyrighturl}}
    two.image_copyrightwidth = "140"; // {{twotemplate.two.image_copyrightwidth}}
    two.image_copyrightheight = "41"; // {{twotemplate.two.image_copyrightheight}}
    
    two.font_fontfamily = "Helvetica, Arial, sans-serif"; // {{twotemplate.two.font_fontfamily}}
    two.font_color = "#666666"; // {{twotemplate.two.font_color}}
    two.font_link = "#2b9af3"; // {{twotemplate.two.font_link}}
    two.font_footercolor = "#a1a1a1"; // {{twotemplate.two.font_footercolor}}
    two.font_footerfontsize = "11"; // {{twotemplate.two.font_footerfontsize}}
    
    two.content_color = "#555555"; // {{twotemplate.two.content_color}}
    two.content_link = "#2b9af3"; // {{twotemplate.two.content_link}}
    two.content_paragraph = "14"; // {{twotemplate.two.content_paragraph}}
    two.content_heading1 = "22"; // {{twotemplate.two.content_heading1}}
    two.content_heading1color = "#666666"; // {{twotemplate.two.content_heading1color}}
    two.content_heading2 = "20"; // {{twotemplate.two.content_heading2}}
    two.content_heading2color = "#666666"; // {{twotemplate.two.content_heading2color}}
    two.content_heading3 = "30"; // {{twotemplate.two.content_heading3}}
    two.content_heading3color = "#666666"; // {{twotemplate.two.content_heading3color}}
    two.content_heading4 = "18"; // {{twotemplate.two.content_heading4}}
    two.content_heading5 = "16"; // {{twotemplate.two.content_heading5}}
    two.content_heading6 = "14"; // {{twotemplate.two.content_heading6}}
})
    .controller("TwoTemplateCtrl", function TwoTemplateCtrl(two) {
    var twotemplate = this;

    twotemplate.two = two;
})
    .controller("TwoEditorCtrl", function TwoEditorCtrl(two) {
    var twoeditor = this;

    twoeditor.two = two;
})

/* 
Three Shared Controller 
*/
    .service("three", function Three() {
    var three = this;

    three.color_bgcolor = "#f1f2f6"; // {{threetemplate.three.color_bgcolor}}
    three.color_contentbg = "#ffffff"; // {{threetemplate.three.color_contentbg}}
    three.color_border = "#e2e3e7"; // {{threetemplate.three.color_border}}
    three.color_border2 = "#e3e6ec"; // {{threetemplate.three.color_border2}}
    three.color_shadow = "#edeff3"; // {{threetemplate.three.color_shadow}}
    
    three.image_logourl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/3/logo.png"; // {{threetemplate.three.image_logourl}}
    three.image_logowidth = "43"; // {{threetemplate.three.image_logowidth}}
    three.image_logoheight = "43"; // {{threetemplate.three.image_logoheight}}
    
    three.font_fontfamily = "Helvetica, Arial, sans-serif"; // {{threetemplate.three.font_fontfamily}}
    three.font_footercolor = "#666666"; // {{threetemplate.three.font_footercolor}}
    three.font_footerfontsize = "12"; // {{threetemplate.three.font_footerfontsize}}
    
    three.content_color = "#555555"; // {{threetemplate.three.content_color}}
    three.content_link = "#0072c6"; // {{threetemplate.three.content_link}}
    three.content_paragraph = "14"; // {{threetemplate.three.content_paragraph}}
    three.content_heading1 = "22"; // {{threetemplate.three.content_heading1}}
    three.content_heading1color = "#0072c6"; // {{threetemplate.three.content_heading1color}}
    three.content_heading2 = "20"; // {{threetemplate.three.content_heading2}}
    three.content_heading2color = "#666666"; // {{threetemplate.three.content_heading2color}}
    three.content_heading3 = "30"; // {{threetemplate.three.content_heading3}}
    three.content_heading3color = "#666666"; // {{threetemplate.three.content_heading3color}}
    three.content_heading4 = "16"; // {{threetemplate.three.content_heading4}}
    three.content_heading5 = "15"; // {{threetemplate.three.content_heading5}}
    three.content_heading6 = "14"; // {{threetemplate.three.content_heading6}}

})
    .controller("ThreeTemplateCtrl", function ThreeTemplateCtrl(three) {
    var threetemplate = this;

    threetemplate.three = three;
})
    .controller("ThreeEditorCtrl", function ThreeEditorCtrl(three) {
    var threeeditor = this;

    threeeditor.three = three;
})

/* 
Four Shared Controller
*/
    .service("four", function Four() {
    var four = this;

    four.color_bgcolor = "#ececec"; // {{fourtemplate.four.color_bgcolor}}
    four.color_contentbg = "#ffffff"; // {{fourtemplate.four.color_contentbg}}
    four.color_border = "#dadada"; // {{fourtemplate.four.color_border}}
    
    four.image_bgurl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/4/bg.png"; // {{fourtemplate.four.image_bgurl}}
    four.image_bgwidth = "700"; // {{fourtemplate.four.image_bgwidth}}
    four.image_bgheight = "770"; // {{fourtemplate.four.image_bgheight}}
    
    four.font_fontfamily = "Helvetica, Arial, sans-serif"; // {{fourtemplate.four.font_fontfamily}}
    four.font_color = "#666666"; // {{fourtemplate.four.font_color}}
    four.font_link = "#666666"; // {{fourtemplate.four.font_link}}
    four.font_footercolor = "#a1a1a1"; // {{fourtemplate.four.font_footercolor}}
    four.font_footerfontsize = "12"; // {{fourtemplate.four.font_footerfontsize}}
    
    four.content_color = "#333333"; // {{fourtemplate.four.content_color}}
    four.content_link = "#666666"; // {{fourtemplate.four.content_link}}
    four.content_paragraph = "14"; // {{fourtemplate.four.content_paragraph}}
    four.content_heading1 = "28"; // {{fourtemplate.four.content_heading1}}
    four.content_heading1color = "#333333"; // {{fourtemplate.four.content_heading1color}}
    four.content_heading2 = "20"; // {{fourtemplate.four.content_heading2}}
    four.content_heading2color = "#666666"; // {{fourtemplate.four.content_heading2color}}
    four.content_heading3 = "34"; // {{fourtemplate.four.content_heading3}}
    four.content_heading3color = "#333333"; // {{fourtemplate.four.content_heading3color}}
    four.content_heading4 = "18"; // {{fourtemplate.four.content_heading4}}
    four.content_heading5 = "16"; // {{fourtemplate.four.content_heading5}}
    four.content_heading6 = "14"; // {{fourtemplate.four.content_heading6}}
})
    .controller("FourTemplateCtrl", function FourTemplateCtrl(four) {
    var fourtemplate = this;

    fourtemplate.four = four;
})
    .controller("FourEditorCtrl", function FourEditorCtrl(four) {
    var foureditor = this;

    foureditor.four = four;
})

/* 
Five Shared Controller 
*/
    .service("five", function Five() {
    var five = this;

    five.color_bgcolor = "#FAFAFA"; // {{fivetemplate.five.color_bgcolor}}
    five.color_contentbg = "#ffffff"; // {{fivetemplate.five.color_contentbg}}
    five.color_border = "#E2E3E4"; // {{fivetemplate.five.color_border}}
    
    five.image_logourl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/5/logo.png"; // {{fivetemplate.five.image_logourl}}
    five.image_logowidth = "60"; // {{fivetemplate.five.image_logowidth}}
    five.image_logoheight = "60"; // {{fivetemplate.five.image_logoheight}}
    
    five.font_fontfamily = "Helvetica, Arial, sans-serif"; // {{fivetemplate.five.font_fontfamily}}
    five.font_color = "#484E51"; // {{fivetemplate.five.font_color}}
    five.font_link = "#9F9D93"; // {{fivetemplate.five.font_link}}
    five.font_footercolor = "#484E51"; // {{fivetemplate.five.font_footercolor}}
    
    five.content_color = "#666666"; // {{fivetemplate.five.content_color}}
    five.content_link = "#9F9D93"; // {{fivetemplate.five.content_link}}
    five.content_paragraph = "14"; // {{fivetemplate.five.content_paragraph}}
    five.content_heading1 = "22"; // {{fivetemplate.five.content_heading1}}
    five.content_heading1color = "#666666"; // {{fivetemplate.five.content_heading1color}}
    five.content_heading2 = "20"; // {{fivetemplate.five.content_heading2}}
    five.content_heading2color = "#666666"; // {{fivetemplate.five.content_heading2color}}
    five.content_heading3 = "30"; // {{fivetemplate.five.content_heading3}}
    five.content_heading3color = "#555555"; // {{fivetemplate.five.content_heading3color}}
    five.content_heading4 = "18"; // {{fivetemplate.five.content_heading4}}
    five.content_heading5 = "16"; // {{fivetemplate.five.content_heading5}}
    five.content_heading6 = "14"; // {{fivetemplate.five.content_heading6}}
})
    .controller("FiveTemplateCtrl", function FiveTemplateCtrl(five) {
    var fivetemplate = this;

    fivetemplate.five = five;
})
    .controller("FiveEditorCtrl", function FiveEditorCtrl(five) {
    var fiveeditor = this;

    fiveeditor.five = five;
})

/* 
Six Shared Controller
*/
    .service("six", function Six() {
    var six = this;

    six.color_bgcolor = "#f9f9f9"; // {{sixtemplate.six.color_bgcolor}}
    six.color_contentbg = "#ffffff"; // {{sixtemplate.six.color_contentbg}}
    six.color_border = "#dddddd"; // {{sixtemplate.six.color_border}}
    
    six.image_logourl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/6/logo.png"; // {{sixtemplate.six.image_logourl}}
    six.image_logowidth = "136"; // {{sixtemplate.six.image_logowidth}}
    six.image_logoheight = "40"; // {{sixtemplate.six.image_logoheight}}
    six.image_imageurl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/6/bg.jpg"; // {{sixtemplate.six.image_imageurl}}
    
    six.font_fontfamily = "Helvetica, Arial, sans-serif"; // {{sixtemplate.six.font_fontfamily}}
    six.font_color = "#777777"; // {{sixtemplate.six.font_color}}
    six.font_size = "14"; // {{sixtemplate.six.font_size}}
    six.font_link = "#95a5a6"; // {{sixtemplate.six.font_link}}
    six.font_linksize = "14"; // {{sixtemplate.six.font_linksize}}
    six.font_footercolor = "#95a5a6"; // {{sixtemplate.six.font_footercolor}}
    six.font_footerfontsize = "12"; // {{sixtemplate.six.font_footerfontsize}}
    
    six.content_color = "#777777"; // {{sixtemplate.six.content_color}}
    six.content_link = "#f379b2"; // {{sixtemplate.six.content_link}}
    six.content_paragraph = "14"; // {{sixtemplate.six.content_paragraph}}
    six.content_heading1 = "22"; // {{sixtemplate.six.content_heading1}}
    six.content_heading1color = "#555555"; // {{sixtemplate.six.content_heading1color}}
    six.content_heading2 = "20"; // {{sixtemplate.six.content_heading2}}
    six.content_heading2color = "#555555"; // {{sixtemplate.six.content_heading2color}}
    six.content_heading3 = "30"; // {{sixtemplate.six.content_heading3}}
    six.content_heading3color = "#555555"; // {{sixtemplate.six.content_heading3color}}
    six.content_heading4 = "18"; // {{sixtemplate.six.content_heading4}}
    six.content_heading5 = "16"; // {{sixtemplate.six.content_heading5}}
    six.content_heading6 = "14"; // {{sixtemplate.six.content_heading6}}
})
    .controller("SixTemplateCtrl", function SixTemplateCtrl(six) {
    var sixtemplate = this;

    sixtemplate.six = six;
})
    .controller("SixEditorCtrl", function SixEditorCtrl(six) {
    var sixeditor = this;

    sixeditor.six = six;
})

/* 
Seven Shared Controller 
*/
    .service("seven", function Seven() {
    var seven = this;

    seven.color_bgcolor = "#c3dfea"; // {{seventemplate.seven.color_bgcolor}}
    seven.color_contentbg = "#ffffff"; // {{seventemplate.seven.color_contentbg}}
    
    seven.image_logourl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/7/logo.png"; // {{seventemplate.seven.image_logourl}}
    seven.image_logowidth = "110"; // {{seventemplate.seven.image_logowidth}}
    seven.image_imageurl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/7/image.jpg"; // {{seventemplate.seven.image_imageurl}}
    
    seven.font_fontfamily = "Helvetica, Arial, sans-serif"; // {{seventemplate.seven.font_fontfamily}}
    seven.font_color = "#656565"; // {{seventemplate.seven.font_color}}
    seven.font_size = "14"; // {{seventemplate.seven.font_size}}
    seven.font_link = "#656565"; // {{seventemplate.seven.font_link}}
    seven.font_footercolor = "#656565"; // {{seventemplate.seven.font_footercolor}}
    seven.font_footerfontsize = "12"; // {{seventemplate.seven.font_footerfontsize}}
    
    seven.content_color = "#555555"; // {{seventemplate.seven.content_color}}
    seven.content_link = "#f79fb4"; // {{seventemplate.seven.content_link}}
    seven.content_paragraph = "14"; // {{seventemplate.seven.content_paragraph}}
    seven.content_heading1 = "22"; // {{seventemplate.seven.content_heading1}}
    seven.content_heading1color = "#666666"; // {{seventemplate.seven.content_heading1color}}
    seven.content_heading2 = "20"; // {{seventemplate.seven.content_heading2}}
    seven.content_heading2color = "#666666"; // {{seventemplate.seven.content_heading2color}}
    seven.content_heading3 = "30"; // {{seventemplate.seven.content_heading3}}
    seven.content_heading3color = "#666666"; // {{seventemplate.seven.content_heading3color}}
    seven.content_heading4 = "18"; // {{seventemplate.seven.content_heading4}}
    seven.content_heading5 = "16"; // {{seventemplate.seven.content_heading5}}
    seven.content_heading6 = "14"; // {{seventemplate.seven.content_heading6}}
    
})
    .controller("SevenTemplateCtrl", function SevenTemplateCtrl(seven) {
    var seventemplate = this;

    seventemplate.seven = seven;
})
    .controller("SevenEditorCtrl", function SevenEditorCtrl(seven) {
    var seveneditor = this;

    seveneditor.seven = seven;
})

/* 
Eight Shared Controller
*/
    .service("eight", function Eight() {
    var eight = this;

    eight.color_bgcolor = "#ffffff"; // {{eighttemplate.eight.color_bgcolor}}
    eight.color_border = "#cccccc"; // {{eighttemplate.eight.color_border}}
    
    eight.image_logourl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/8/logo.png"; // {{eighttemplate.eight.image_logourl}}
    eight.image_logowidth = "170"; // {{eighttemplate.eight.image_logowidth}}
    eight.image_logoheight = "50"; // {{eighttemplate.eight.image_logoheight}}
    
    eight.font_fontfamily = "Helvetica, Arial, sans-serif"; // {{eighttemplate.eight.font_fontfamily}}
    eight.font_color = "#4c4c4c"; // {{eighttemplate.eight.font_color}}
    eight.font_link = "#ecbe34"; // {{eighttemplate.eight.font_link}}
    eight.font_footercolor = "#a1a1a1"; // {{eighttemplate.eight.font_footercolor}}
    eight.font_footerfontsize = "11"; // {{eighttemplate.eight.font_footerfontsize}}
    
    eight.content_color = "#4c4c4c"; // {{eighttemplate.eight.content_color}}
    eight.content_link = "#ecbe34"; // {{eighttemplate.eight.content_link}}
    eight.content_paragraph = "14"; // {{eighttemplate.eight.content_paragraph}}
    eight.content_heading1 = "22"; // {{eighttemplate.eight.content_heading1}}
    eight.content_heading1color = "#4c4c4c"; // {{eighttemplate.eight.content_heading1color}}
    eight.content_heading2 = "20"; // {{eighttemplate.eight.content_heading2}}
    eight.content_heading2color = "#4c4c4c"; // {{eighttemplate.eight.content_heading2color}}
    eight.content_heading3 = "30"; // {{eighttemplate.eight.content_heading3}}
    eight.content_heading3color = "#4c4c4c"; // {{eighttemplate.eight.content_heading3color}}
    eight.content_heading4 = "18"; // {{eighttemplate.eight.content_heading4}}
    eight.content_heading5 = "16"; // {{eighttemplate.eight.content_heading5}}
    eight.content_heading6 = "14"; // {{eighttemplate.eight.content_heading6}}
    
})
    .controller("EightTemplateCtrl", function EightTemplateCtrl(eight) {
    var eighttemplate = this;

    eighttemplate.eight = eight;
})
    .controller("EightEditorCtrl", function EightEditorCtrl(eight) {
    var eighteditor = this;

    eighteditor.eight = eight;
})

/* 
Nine Shared Controller 
*/
    .service("nine", function Nine() {
    var nine = this;

    nine.color_bgcolor = "#e8e8e8"; // {{ninetemplate.nine.color_bgcolor}}
    nine.color_contentbg = "#ffffff"; // {{ninetemplate.nine.color_contentbg}}
    
    nine.image_logourl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/9/logo.png"; // {{ninetemplate.nine.image_logourl}}
    nine.image_logowidth = "40"; // {{ninetemplate.nine.image_logowidth}}
    nine.image_logoheight = "40"; // {{ninetemplate.nine.image_logoheight}}
    nine.image_imageurl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/9/bg.jpg"; // {{ninetemplate.nine.image_imageurl}}
    nine.image_copyrighturl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/9/logo.png"; // {{ninetemplate.nine.image_copyrighturl}}
    nine.image_copyrightwidth = "32"; // {{ninetemplate.nine.image_copyrightwidth}}
    nine.image_copyrightheight = "32"; // {{ninetemplate.nine.image_copyrightheight}}
    
    nine.font_fontfamily = "Helvetica, Arial, sans-serif"; // {{ninetemplate.nine.font_fontfamily}}
    nine.font_color = "#414141"; // {{ninetemplate.nine.font_color}}
    nine.font_link = "#73acb5"; // {{ninetemplate.nine.font_link}}
    nine.font_footercolor = "#888888"; // {{ninetemplate.nine.font_footercolor}}
    nine.font_footerfontsize = "12"; // {{ninetemplate.nine.font_footerfontsize}}
    
    nine.content_color = "#414141"; // {{ninetemplate.nine.content_color}}
    nine.content_link = "#73acb5"; // {{ninetemplate.nine.content_link}}
    nine.content_paragraph = "14"; // {{ninetemplate.nine.content_paragraph}}
    nine.content_heading1 = "22"; // {{ninetemplate.nine.content_heading1}}
    nine.content_heading1color = "#414141"; // {{ninetemplate.nine.content_heading1color}}
    nine.content_heading2 = "20"; // {{ninetemplate.nine.content_heading2}}
    nine.content_heading2color = "#414141"; // {{ninetemplate.nine.content_heading2color}}
    nine.content_heading3 = "30"; // {{ninetemplate.nine.content_heading3}}
    nine.content_heading3color = "#414141"; // {{ninetemplate.nine.content_heading3color}}
    nine.content_heading4 = "18"; // {{ninetemplate.nine.content_heading4}}
    nine.content_heading5 = "16"; // {{ninetemplate.nine.content_heading5}}
    nine.content_heading6 = "14"; // {{ninetemplate.nine.content_heading6}}
})
    .controller("NineTemplateCtrl", function NineTemplateCtrl(nine) {
    var ninetemplate = this;

    ninetemplate.nine = nine;
})
    .controller("NineEditorCtrl", function NineEditorCtrl(nine) {
    var nineeditor = this;

    nineeditor.nine = nine;
})

/* 
Ten Shared Controller
*/
    .service("ten", function Ten() {
    var ten = this;

    ten.color_bgcolor = "#222222"; // {{tentemplate.ten.color_bgcolor}}
    ten.color_contentbg = "#f8f9fc"; // {{tentemplate.ten.color_contentbg}}
    
    ten.image_logourl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/10/logo.png"; // {{tentemplate.ten.image_logourl}}
    ten.image_logowidth = "60"; // {{tentemplate.ten.image_logowidth}}
    ten.image_logoheight = "60"; // {{tentemplate.ten.image_logoheight}}
    ten.image_copyrighturl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/10/copyright.png"; // {{tentemplate.ten.image_copyrighturl}}
    ten.image_copyrightwidth = "140"; // {{tentemplate.ten.image_copyrightwidth}}
    ten.image_copyrightheight = "41"; // {{tentemplate.ten.image_copyrightheight}}
    
    ten.font_fontfamily = "Helvetica, Arial, sans-serif"; // {{tentemplate.ten.font_fontfamily}}
    ten.font_color = "#7f8c8d"; // {{tentemplate.ten.font_color}}
    ten.font_link = "#2b9af3"; // {{tentemplate.ten.font_link}}
    ten.font_linksize = "14"; // {{tentemplate.ten.font_linksize}}
    ten.font_footercolor = "#b2b2b2"; // {{tentemplate.ten.font_footercolor}}
    ten.font_footerfontsize = "12"; // {{tentemplate.ten.font_footerfontsize}}
    
    ten.content_color = "#666666"; // {{tentemplate.ten.content_color}}
    ten.content_link = "#2b9af3"; // {{tentemplate.ten.content_link}}
    ten.content_paragraph = "14"; // {{tentemplate.ten.content_paragraph}}
    ten.content_heading1 = "22"; // {{tentemplate.ten.content_heading1}}
    ten.content_heading1color = "#666666"; // {{tentemplate.ten.content_heading1color}}
    ten.content_heading2 = "20"; // {{tentemplate.ten.content_heading2}}
    ten.content_heading2color = "#666666"; // {{tentemplate.ten.content_heading2color}}
    ten.content_heading3 = "30"; // {{tentemplate.ten.content_heading3}}
    ten.content_heading3color = "#666666"; // {{tentemplate.ten.content_heading3color}}
    ten.content_heading4 = "18"; // {{tentemplate.ten.content_heading4}}
    ten.content_heading5 = "16"; // {{tentemplate.ten.content_heading5}}
    ten.content_heading6 = "14"; // {{tentemplate.ten.content_heading6}}
})
    .controller("TenTemplateCtrl", function TenTemplateCtrl(ten) {
    var tentemplate = this;

    tentemplate.ten = ten;
})
    .controller("TenEditorCtrl", function TenEditorCtrl(ten) {
    var teneditor = this;

    teneditor.ten = ten;
})

/* 
Eleven Shared Controller 
*/
    .service("eleven", function Eleven() {
    var eleven = this;

    eleven.color_bgcolor = "#ffffff"; // {{eleventemplate.eleven.color_bgcolor}}
    eleven.color_border = "#999999"; // {{eleventemplate.eleven.color_border}}
    
    eleven.image_logourl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/11/logo.png"; // {{eleventemplate.eleven.image_logourl}}
    eleven.image_logowidth = "150"; // {{eleventemplate.eleven.image_logowidth}}
    eleven.image_imageurl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/11/image.jpg"; // {{eleventemplate.eleven.image_imageurl}}
    
    eleven.font_fontfamily = "Helvetica, Arial, sans-serif"; // {{eleventemplate.eleven.font_fontfamily}}
    eleven.font_color = "#666666"; // {{eleventemplate.eleven.font_color}}
    eleven.font_link = "#d92b72"; // {{eleventemplate.eleven.font_link}}
    eleven.font_footercolor = "#999999"; // {{eleventemplate.eleven.font_footercolor}}
    eleven.font_footerfontsize = "12"; // {{eleventemplate.eleven.font_footerfontsize}}
    
    eleven.content_color = "#555555"; // {{eleventemplate.eleven.content_color}}
    eleven.content_link = "#d92b72"; // {{eleventemplate.eleven.content_link}}
    eleven.content_paragraph = "14"; // {{eleventemplate.eleven.content_paragraph}}
    eleven.content_heading1 = "22"; // {{eleventemplate.eleven.content_heading1}}
    eleven.content_heading1color = "#666666"; // {{eleventemplate.eleven.content_heading1color}}
    eleven.content_heading2 = "20"; // {{eleventemplate.eleven.content_heading2}}
    eleven.content_heading2color = "#666666"; // {{eleventemplate.eleven.content_heading2color}}
    eleven.content_heading3 = "30"; // {{eleventemplate.eleven.content_heading3}}
    eleven.content_heading3color = "#666666"; // {{eleventemplate.eleven.content_heading3color}}
    eleven.content_heading4 = "18"; // {{eleventemplate.eleven.content_heading4}}
    eleven.content_heading5 = "16"; // {{eleventemplate.eleven.content_heading5}}
    eleven.content_heading6 = "14"; // {{eleventemplate.eleven.content_heading6}}
})
    .controller("ElevenTemplateCtrl", function ElevenTemplateCtrl(eleven) {
    var eleventemplate = this;

    eleventemplate.eleven = eleven;
})
    .controller("ElevenEditorCtrl", function ElevenEditorCtrl(eleven) {
    var eleveneditor = this;

    eleveneditor.eleven = eleven;
})

/* 
Twelve Shared Controller
*/
    .service("twelve", function Twelve() {
    var twelve = this;

    twelve.color_bgcolor = "#ffffff"; // {{twelvetemplate.twelve.color_bgcolor}}
    twelve.color_border = "#e0e0e0"; // {{twelvetemplate.twelve.color_border}}
    
    twelve.image_logourl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/12/logo.png"; // {{twelvetemplate.twelve.image_logourl}}
    twelve.image_logowidth = "161"; // {{twelvetemplate.twelve.image_logowidth}}
    
    twelve.font_fontfamily = "Helvetica, Arial, sans-serif"; // {{twelvetemplate.twelve.font_fontfamily}}
    twelve.font_color = "#6C6C6C"; // {{twelvetemplate.twelve.font_color}}
    twelve.font_link = "#00bf92"; // {{twelvetemplate.twelve.font_link}}
    twelve.font_footercolor = "#6C6C6C"; // {{twelvetemplate.twelve.font_footercolor}}
    twelve.font_footerfontsize = "19"; // {{twelvetemplate.twelve.font_footerfontsize}}
    
    twelve.content_color = "#555555"; // {{twelvetemplate.twelve.content_color}}
    twelve.content_link = "#00bf92"; // {{twelvetemplate.twelve.content_link}}
    twelve.content_paragraph = "14"; // {{twelvetemplate.twelve.content_paragraph}}
    twelve.content_heading1 = "22"; // {{twelvetemplate.twelve.content_heading1}}
    twelve.content_heading1color = "#666666"; // {{twelvetemplate.twelve.content_heading1color}}
    twelve.content_heading2 = "20"; // {{twelvetemplate.twelve.content_heading2}}
    twelve.content_heading2color = "#666666"; // {{twelvetemplate.twelve.content_heading2color}}
    twelve.content_heading3 = "30"; // {{twelvetemplate.twelve.content_heading3}}
    twelve.content_heading3color = "#666666"; // {{twelvetemplate.twelve.content_heading3color}}
    twelve.content_heading4 = "18"; // {{twelvetemplate.twelve.content_heading4}}
    twelve.content_heading5 = "16"; // {{twelvetemplate.twelve.content_heading5}}
    twelve.content_heading6 = "14"; // {{twelvetemplate.twelve.content_heading6}}
})
    .controller("TwelveTemplateCtrl", function TwelveTemplateCtrl(twelve) {
    var twelvetemplate = this;

    twelvetemplate.twelve = twelve;
})
    .controller("TwelveEditorCtrl", function TwelveEditorCtrl(twelve) {
    var twelveeditor = this;

    twelveeditor.twelve = twelve;
})

/* 
Thirteen Shared Controller 
*/
    .service("thirteen", function Thirteen() {
    var thirteen = this;
    
    thirteen.color_bgcolor = "#F1F1F1"; // {{thirteentemplate.thirteen.color_bgcolor}}
    thirteen.color_contentbg = "#ffffff"; // {{thirteentemplate.thirteen.color_contentbg}}
    thirteen.color_footer = "#343C40"; // {{thirteentemplate.thirteen.color_footer}}
    
    thirteen.image_logourl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/13/logo.png"; // {{thirteentemplate.thirteen.image_logourl}}
    thirteen.image_logowidth = "180"; // {{thirteentemplate.thirteen.image_logowidth}}
    thirteen.image_logoheight = "180"; // {{thirteentemplate.thirteen.image_logoheight}}
    
    thirteen.font_fontfamily = "Helvetica, Arial, sans-serif"; // {{thirteentemplate.thirteen.font_fontfamily}}
    thirteen.font_color = "#ffffff"; // {{thirteentemplate.thirteen.font_color}}
    thirteen.font_link = "#2cbae7"; // {{thirteentemplate.thirteen.font_link}}
    thirteen.font_footercolor = "#ffffff"; // {{thirteentemplate.thirteen.font_footercolor}}
    thirteen.font_footerfontsize = "14"; // {{thirteentemplate.thirteen.font_footerfontsize}}
    
    thirteen.content_color = "#555555"; // {{thirteentemplate.thirteen.content_color}}
    thirteen.content_link = "#2cbae7"; // {{thirteentemplate.thirteen.content_link}}
    thirteen.content_paragraph = "14"; // {{thirteentemplate.thirteen.content_paragraph}}
    thirteen.content_heading1 = "22"; // {{thirteentemplate.thirteen.content_heading1}}
    thirteen.content_heading1color = "#666666"; // {{thirteentemplate.thirteen.content_heading1color}}
    thirteen.content_heading2 = "20"; // {{thirteentemplate.thirteen.content_heading2}}
    thirteen.content_heading2color = "#666666"; // {{thirteentemplate.thirteen.content_heading2color}}
    thirteen.content_heading3 = "30"; // {{thirteentemplate.thirteen.content_heading3}}
    thirteen.content_heading3color = "#666666"; // {{thirteentemplate.thirteen.content_heading3color}}
    thirteen.content_heading4 = "18"; // {{thirteentemplate.thirteen.content_heading4}}
    thirteen.content_heading5 = "16"; // {{thirteentemplate.thirteen.content_heading5}}
    thirteen.content_heading6 = "14"; // {{thirteentemplate.thirteen.content_heading6}}
    
})
    .controller("ThirteenTemplateCtrl", function ThirteenTemplateCtrl(thirteen) {
    var thirteentemplate = this;

    thirteentemplate.thirteen = thirteen;
})
    .controller("ThirteenEditorCtrl", function ThirteenEditorCtrl(thirteen) {
    var thirteeneditor = this;

    thirteeneditor.thirteen = thirteen;
})

/* 
Fourteen Shared Controller
*/
    .service("fourteen", function Fourteen() {
    var fourteen = this;

    fourteen.color_bgcolor = "#ffffff"; // {{fourteentemplate.fourteen.color_bgcolor}}
    fourteen.color_contentbg = "#2C9ECC"; // {{fourteentemplate.fourteen.color_contentbg}}
    fourteen.color_border = "#bbb"; // {{fourteentemplate.fourteen.color_border}}
    
    fourteen.image_logourl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/14/logo.gif"; // {{fourteentemplate.fourteen.image_logourl}}
    
    fourteen.font_fontfamily = "Helvetica, Arial, sans-serif"; // {{fourteentemplate.fourteen.font_fontfamily}}
    fourteen.font_color = "#0f2c53"; // {{fourteentemplate.fourteen.font_color}}
    fourteen.font_link = "#ffffff"; // {{fourteentemplate.fourteen.font_link}}
    fourteen.font_size = "14"; // {{fourteentemplate.fourteen.font_size}}
    fourteen.font_footercolor = "#0f2c53"; // {{fourteentemplate.fourteen.font_footercolor}}
    fourteen.font_footerfontsize = "14"; // {{fourteentemplate.fourteen.font_footerfontsize}}
    
    fourteen.content_color = "#0f2c53"; // {{fourteentemplate.fourteen.content_color}}
    fourteen.content_link = "#ffffff"; // {{fourteentemplate.fourteen.content_link}}
    fourteen.content_paragraph = "14"; // {{fourteentemplate.fourteen.content_paragraph}}
    fourteen.content_heading1 = "22"; // {{fourteentemplate.fourteen.content_heading1}}
    fourteen.content_heading1color = "#ffffff"; // {{fourteentemplate.fourteen.content_heading1color}}
    fourteen.content_heading2 = "20"; // {{fourteentemplate.fourteen.content_heading2}}
    fourteen.content_heading2color = "#ffffff"; // {{fourteentemplate.fourteen.content_heading2color}}
    fourteen.content_heading3 = "30"; // {{fourteentemplate.fourteen.content_heading3}}
    fourteen.content_heading3color = "#ffffff"; // {{fourteentemplate.fourteen.content_heading3color}}
    fourteen.content_heading4 = "18"; // {{fourteentemplate.fourteen.content_heading4}}
    fourteen.content_heading4color = "#ffffff"; // {{fourteentemplate.fourteen.content_heading4color}}
    fourteen.content_heading5 = "16"; // {{fourteentemplate.fourteen.content_heading5}}
    fourteen.content_heading6 = "14"; // {{fourteentemplate.fourteen.content_heading6}}
    
})
    .controller("FourteenTemplateCtrl", function FourteenTemplateCtrl(fourteen) {
    var fourteentemplate = this;

    fourteentemplate.fourteen = fourteen;
})
    .controller("FourteenEditorCtrl", function FourteenEditorCtrl(fourteen) {
    var fourteeneditor = this;

    fourteeneditor.fourteen = fourteen;
})

/* 
Fifteen Shared Controller 
*/
    .service("fifteen", function Fifteen() {
    var fifteen = this;

    fifteen.color_bgcolor = "#FFFFFF"; // {{fifteentemplate.fifteen.color_bgcolor}}
    fifteen.color_footer = "#1F1F1F"; // {{fifteentemplate.fifteen.color_footer}}
    
    fifteen.image_logourl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/15/logo.png"; // {{fifteentemplate.fifteen.image_logourl}}
    fifteen.image_logowidth = "180"; // {{fifteentemplate.fifteen.image_logowidth}}
    fifteen.image_logoheight = "53"; // {{fifteentemplate.fifteen.image_logoheight}}
    fifteen.image_imageurl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/15/image.jpg"; // {{fifteentemplate.fifteen.image_imageurl}}
    fifteen.image_imageheight = "250"; // {{fifteentemplate.fifteen.image_imageheight}}

    
    fifteen.font_fontfamily = "Helvetica, Arial, sans-serif"; // {{fifteentemplate.fifteen.font_fontfamily}}
    fifteen.font_color = "#383838"; // {{fifteentemplate.fifteen.font_color}}
    fifteen.font_footercolor = "#b2b2b2"; // {{fifteentemplate.fifteen.font_footercolor}}
    fifteen.font_footerfontsize = "11"; // {{fifteentemplate.fifteen.font_footerfontsize}}
    
    fifteen.content_color = "#383838"; // {{fifteentemplate.fifteen.content_color}}
    fifteen.content_link = "#5c797d"; // {{fifteentemplate.fifteen.content_link}}
    fifteen.content_paragraph = "15"; // {{fifteentemplate.fifteen.content_paragraph}}
    fifteen.content_heading1 = "22"; // {{fifteentemplate.fifteen.content_heading1}}
    fifteen.content_heading1color = "#383838"; // {{fifteentemplate.fifteen.content_heading1color}}
    fifteen.content_heading2 = "20"; // {{fifteentemplate.fifteen.content_heading2}}
    fifteen.content_heading2color = "#383838"; // {{fifteentemplate.fifteen.content_heading2color}}
    fifteen.content_heading3 = "30"; // {{fifteentemplate.fifteen.content_heading3}}
    fifteen.content_heading3color = "#383838"; // {{fifteentemplate.fifteen.content_heading3color}}
    fifteen.content_heading4 = "18"; // {{fifteentemplate.fifteen.content_heading4}}
    fifteen.content_heading5 = "16"; // {{fifteentemplate.fifteen.content_heading5}}
    fifteen.content_heading6 = "14"; // {{fifteentemplate.fifteen.content_heading6}}
})
    .controller("FifteenTemplateCtrl", function FifteenTemplateCtrl(fifteen) {
    var fifteentemplate = this;

    fifteentemplate.fifteen = fifteen;
})
    .controller("FifteenEditorCtrl", function FifteenEditorCtrl(fifteen) {
    var fifteeneditor = this;

    fifteeneditor.fifteen = fifteen;
})

/* 
Sixteen Shared Controller
*/
    .service("sixteen", function Sixteen() {
    var sixteen = this;

    sixteen.color_bgcolor = "#FEFEFE"; // {{sixteentemplate.sixteen.color_bgcolor}}
    sixteen.color_lines = "#EAEAEA"; // {{sixteentemplate.sixteen.color_lines}}
    
    sixteen.image_logourl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/16/logo.png"; // {{sixteentemplate.sixteen.image_logourl}}
    sixteen.image_logowidth = "50"; // {{sixteentemplate.sixteen.image_logowidth}}
    sixteen.image_logoheight = "50"; // {{sixteentemplate.sixteen.image_logoheight}}
    sixteen.image_imageurl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/16/image.jpg"; // {{sixteentemplate.sixteen.image_imageurl}}
    sixteen.image_copyrighturl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/16/logo.png"; // {{sixteentemplate.sixteen.image_copyrighturl}}
    sixteen.image_copyrightwidth = "40"; // {{sixteentemplate.sixteen.image_copyrightwidth}}
    sixteen.image_copyrightheight = "40"; // {{sixteentemplate.sixteen.image_copyrightheight}}
    
    sixteen.font_fontfamily = "Helvetica, Arial, sans-serif"; // {{sixteentemplate.sixteen.font_fontfamily}}
    sixteen.font_size = "13"; // {{sixteentemplate.sixteen.font_size}}
    sixteen.font_color = "#666666"; // {{sixteentemplate.sixteen.font_color}}
    sixteen.font_link = "#fb5795"; // {{sixteentemplate.sixteen.font_link}}
    sixteen.font_footercolor = "#878787"; // {{sixteentemplate.sixteen.font_footercolor}}
    sixteen.font_footerfontsize = "12"; // {{sixteentemplate.sixteen.font_footerfontsize}}
    
    sixteen.content_color = "#666666"; // {{sixteentemplate.sixteen.content_color}}
    sixteen.content_link = "#fb5795"; // {{sixteentemplate.sixteen.content_link}}
    sixteen.content_paragraph = "14"; // {{sixteentemplate.sixteen.content_paragraph}}
    sixteen.content_heading1 = "22"; // {{sixteentemplate.sixteen.content_heading1}}
    sixteen.content_heading1color = "#666666"; // {{sixteentemplate.sixteen.content_heading1color}}
    sixteen.content_heading2 = "20"; // {{sixteentemplate.sixteen.content_heading2}}
    sixteen.content_heading2color = "#666666"; // {{sixteentemplate.sixteen.content_heading2color}}
    sixteen.content_heading3 = "30"; // {{sixteentemplate.sixteen.content_heading3}}
    sixteen.content_heading3color = "#666666"; // {{sixteentemplate.sixteen.content_heading3color}}
    sixteen.content_heading4 = "18"; // {{sixteentemplate.sixteen.content_heading4}}
    sixteen.content_heading5 = "16"; // {{sixteentemplate.sixteen.content_heading5}}
    sixteen.content_heading6 = "14"; // {{sixteentemplate.sixteen.content_heading6}}
})
    .controller("SixteenTemplateCtrl", function SixteenTemplateCtrl(sixteen) {
    var sixteentemplate = this;

    sixteentemplate.sixteen = sixteen;
})
    .controller("SixteenEditorCtrl", function SixteenEditorCtrl(sixteen) {
    var sixteeneditor = this;

    sixteeneditor.sixteen = sixteen;
})

/* 
Seventeen Shared Controller 
*/
    .service("seventeen", function Seventeen() {
    var seventeen = this;

    seventeen.color_bgcolor = "#f3f3f3"; // {{seventeentemplate.seventeen.color_bgcolor}}
    seventeen.color_contentbg = "#ffffff"; // {{seventeentemplate.seventeen.color_contentbg}}
    seventeen.color_headerbg = "#1caff6"; // {{seventeentemplate.seventeen.color_headerbg}}
    seventeen.color_radius = "10"; // {{seventeentemplate.seventeen.color_radius}}
    
    seventeen.image_logourl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/17/logo.png"; // {{seventeentemplate.seventeen.image_logourl}}
    seventeen.image_logowidth = "116"; // {{seventeentemplate.seventeen.image_logowidth}}
    seventeen.image_logoheight = "34"; // {{seventeentemplate.seventeen.image_logoheight}}
    
    seventeen.font_fontfamily = "Helvetica, Arial, sans-serif"; // {{seventeentemplate.seventeen.font_fontfamily}}
    seventeen.font_color = "#666666"; // {{seventeentemplate.seventeen.font_color}}
    seventeen.font_link = "#1caff6"; // {{seventeentemplate.seventeen.font_link}}
    seventeen.font_headercolor = "#ffffff"; // {{seventeentemplate.seventeen.font_headercolor}}
    seventeen.font_headerfontsize = "15"; // {{seventeentemplate.seventeen.font_headerfontsize}}
    seventeen.font_footercolor = "#bbbbbb"; // {{seventeentemplate.seventeen.font_footercolor}}
    seventeen.font_footerfontsize = "12"; // {{seventeentemplate.seventeen.font_footerfontsize}}
    
    seventeen.content_color = "#555555"; // {{seventeentemplate.seventeen.content_color}}
    seventeen.content_link = "#1caff6"; // {{seventeentemplate.seventeen.content_link}}
    seventeen.content_paragraph = "14"; // {{seventeentemplate.seventeen.content_paragraph}}
    seventeen.content_heading1 = "22"; // {{seventeentemplate.seventeen.content_heading1}}
    seventeen.content_heading1color = "#666666"; // {{seventeentemplate.seventeen.content_heading1color}}
    seventeen.content_heading2 = "20"; // {{seventeentemplate.seventeen.content_heading2}}
    seventeen.content_heading2color = "#666666"; // {{seventeentemplate.seventeen.content_heading2color}}
    seventeen.content_heading3 = "30"; // {{seventeentemplate.seventeen.content_heading3}}
    seventeen.content_heading3color = "#666666"; // {{seventeentemplate.seventeen.content_heading3color}}
    seventeen.content_heading4 = "18"; // {{seventeentemplate.seventeen.content_heading4}}
    seventeen.content_heading5 = "16"; // {{seventeentemplate.seventeen.content_heading5}}
    seventeen.content_heading6 = "14"; // {{seventeentemplate.seventeen.content_heading6}}
})
    .controller("SeventeenTemplateCtrl", function SeventeenTemplateCtrl(seventeen) {
    var seventeentemplate = this;

    seventeentemplate.seventeen = seventeen;
})
    .controller("SeventeenEditorCtrl", function SeventeenEditorCtrl(seventeen) {
    var seventeeneditor = this;

    seventeeneditor.seventeen = seventeen;
})

/* 
Eighteen Shared Controller
*/
    .service("eighteen", function Eighteen() {
    var eighteen = this;

    eighteen.color_bgcolor = "#e1de48"; // {{eighteentemplate.eighteen.color_bgcolor}}
    eighteen.color_contentbg = "#F4F4F4"; // {{eighteentemplate.eighteen.color_contentbg}}
    
    eighteen.image_logourl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/18/logo.png"; // {{eighteentemplate.eighteen.image_logourl}}
    eighteen.image_logowidth = "170"; // {{eighteentemplate.eighteen.image_logowidth}}
    eighteen.image_logoheight = "50"; // {{eighteentemplate.eighteen.image_logoheight}}
    eighteen.image_imageurl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/18/image.jpg"; // {{eighteentemplate.eighteen.image_imageurl}}
    eighteen.image_copyrighturl = "https://s3-us-west-2.amazonaws.com/wysiwyg.email/templates/images/18/copyright.png"; // {{eighteentemplate.eighteen.image_copyrighturl}}
    eighteen.image_copyrightwidth = "50"; // {{eighteentemplate.eighteen.image_copyrightwidth}}
    eighteen.image_copyrightheight = "50"; // {{eighteentemplate.eighteen.image_copyrightheight}}
    
    eighteen.font_fontfamily = "Helvetica, Arial, sans-serif"; // {{eighteentemplate.eighteen.font_fontfamily}}
    eighteen.font_color = "#999999"; // {{eighteentemplate.eighteen.font_color}}
    eighteen.font_link = "#e1de48"; // {{eighteentemplate.eighteen.font_link}}
    eighteen.font_footercolor = "#B7B7B7"; // {{eighteentemplate.eighteen.font_footercolor}}
    eighteen.font_footerfontsize = "13"; // {{eighteentemplate.eighteen.font_footerfontsize}}
    
    eighteen.content_color = "#999999"; // {{eighteentemplate.eighteen.content_color}}
    eighteen.content_link = "#e1de48"; // {{eighteentemplate.eighteen.content_link}}
    eighteen.content_paragraph = "14"; // {{eighteentemplate.eighteen.content_paragraph}}
    eighteen.content_heading1 = "22"; // {{eighteentemplate.eighteen.content_heading1}}
    eighteen.content_heading1color = "#666666"; // {{eighteentemplate.eighteen.content_heading1color}}
    eighteen.content_heading2 = "20"; // {{eighteentemplate.eighteen.content_heading2}}
    eighteen.content_heading2color = "#666666"; // {{eighteentemplate.eighteen.content_heading2color}}
    eighteen.content_heading3 = "30"; // {{eighteentemplate.eighteen.content_heading3}}
    eighteen.content_heading3color = "#666666"; // {{eighteentemplate.eighteen.content_heading3color}}
    eighteen.content_heading4 = "18"; // {{eighteentemplate.eighteen.content_heading4}}
    eighteen.content_heading5 = "16"; // {{eighteentemplate.eighteen.content_heading5}}
    eighteen.content_heading6 = "14"; // {{eighteentemplate.eighteen.content_heading6}}
})
    .controller("EighteenTemplateCtrl", function EighteenTemplateCtrl(eighteen) {
    var eighteentemplate = this;

    eighteentemplate.eighteen = eighteen;
})
    .controller("EighteenEditorCtrl", function EighteenEditorCtrl(eighteen) {
    var eighteeneditor = this;

    eighteeneditor.eighteen = eighteen;
});





/***********************************************************
***
***    AngularJS direktíva na prídávanie class OPEN na menu.
***    Jednoduché použitie. Iba pridať do HTML:
***
***    toggle-class="nieco"
***
************************************************************/
myapp.directive('toggleClass', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                element.toggleClass(attrs.toggleClass);
            });
        }
    };
});