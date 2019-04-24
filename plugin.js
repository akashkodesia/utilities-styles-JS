(function () {

    var sm = 768,
        md = 992,
        lg = 1200,
        unit = 'px',
        selector = 'e-',
        elements = document.querySelectorAll('[class*=' + selector + ']'),
        vewportWidth = window.innerWidth,
        selectorLenght = selector.split('').length;

    /* All padding Cases All */
    function padding(cases) {
        switch (cases) {
            case 'p-':
                return elements[i].style.padding = value + unit;
            case 'pt-':
                return elements[i].style.paddingTop = value + unit;
            case 'pb-':
                return elements[i].style.paddingBottom = value + unit;               
            case 'pl-':
                return elements[i].style.paddingLeft = value + unit;               
            case 'pr-':
                return elements[i].style.paddingRight = value + unit;               
        }
    }

    function paddingXS(cases) {
        switch (cases) {
            case 'p-xs-':
                return elements[i].style.padding = value + unit;               
            case 'pt-xs-':
                return elements[i].style.paddingTop = value + unit;
            case 'pb-xs-':
                return elements[i].style.paddingBottom = value + unit;               
            case 'pl-xs-':
                return elements[i].style.paddingLeft = value + unit;
            case 'pr-xs-':
                return elements[i].style.paddingRightTop = value + unit;
               
        }
    }

    function paddingSM(cases) {
        switch (cases) {
            case 'p-sm-':
                return elements[i].style.padding = value + unit;               
            case 'pt-sm-':
                return elements[i].style.paddingTop = value + unit;               
            case 'pb-sm-':
                return elements[i].style.paddingBottom = value + unit;               
            case 'pl-sm-':
                return elements[i].style.paddingLeft = value + unit;               
            case 'pr-sm-':
                return elements[i].style.paddingRight = value + unit;
        }
    }

    function paddingMD(cases) {
        switch (cases) {
            case 'p-md-':
                return elements[i].style.padding = value + unit;               
            case 'pt-md-':
                return elements[i].style.paddingTop = value + unit;               
            case 'pb-md-':
                return elements[i].style.paddingBottom = value + unit;               
            case 'pl-md-':
                return elements[i].style.paddingLeft = value + unit;               
            case 'pr-md-':
                return elements[i].style.paddingRight = value + unit;
               
        }
    }

    function paddingLG(cases) {
        switch (cases) {
            case 'p-lg-':
                return elements[i].style.padding = value + unit;               
            case 'pt-lg-':
                return elements[i].style.paddingTop = value + unit;               
            case 'pb-lg-':
                return elements[i].style.paddingBottom = value + unit;
            case 'pl-lg-':
                return elements[i].style.paddingLeft = value + unit;
            case 'pr-lg-':
                return elements[i].style.paddingRight = value + unit;
               
        }
    }

    for (var i = 0; i < elements.length; i++) {

        var allClass = elements[i].classList;
        
        for (var j = 0; j < allClass.length; j++) {
        
            if (allClass[j].indexOf(selector) != -1) {
                var required = allClass[j].substr(selectorLenght),
                    value = required.match(/\d/g).toString().replace(",", ""),
                    cases = required.replace(/\d/g, '');
                padding(cases);
                // Starting Cases for padding
                if (/^p/.test(required)) {
                    
                    // Case will execute on mobile screens
                    if (vewportWidth < sm) {
                        paddingXS(cases);
                    }
                    // Case will execute on small screens    
                    else if (vewportWidth >= sm && vewportWidth < md) {
                        paddingSM(cases);
                    }
                    // Case will execute on medium devices    
                    else if (vewportWidth >= md && vewportWidth < lg) {
                        paddingMD(cases);
                    }

                    // Case will execute on large devices    
                    else if (vewportWidth >= lg) {
                        paddingLG(cases);
                    }
                    
                }
            }
        }

    }
})();
