(function () {

    var sm = 768,
        md = 992,
        lg = 1200,
        unit = 'px',
        selector = 'e-',
        elements = document.querySelectorAll('[class*=' + selector + ']'),
        vewportWidth = window.innerWidth,
        selectorLenght = selector.split('').length;
        document.getElementById('width').innerHTML = vewportWidth; // For Test purpose only


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
            allClassArr = Object.keys(allClass).map(function(key) {
                var raw = allClass[key],
                    toLower = raw.toLowerCase();
                return toLower;
            });   

        /* Not required, remove in final Version
    
        var classPopIndex = allClassArr.findIndex(getIndex);  
        function getIndex(value){
            return value.match(/(e\Wp\W\d(?![a-z][A-Z]))/);
        }
        var popValue = allClassArr[classPopIndex];

        if (classPopIndex > 0){            
            allClassArr.splice(classPopIndex,1);
            allClassArr.unshift(popValue);
        }*/   
        allClassArr.sort();
        console.log(allClassArr); debugger;
        
        for (var j = 0; j < allClassArr.length; j++) {
            
            if (allClassArr[j].indexOf(selector) != -1) {
                var required = allClassArr[j].substr(selectorLenght),
                    value = required.match(/\d/g).toString().replace(/\W/g, ""),
                    cases = required.replace(/\d/g, '');
                
                // Starting Cases for padding
                if (/^p/.test(required)) {

                    padding(cases);

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
    // For Test purpose only
    var s = document.getElementById('testdiv').style.padding;
    document.getElementById('pad').innerHTML = s;
})();
