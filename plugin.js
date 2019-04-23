(function () {

    var sm = 768,
        md = 992,
        lg = 1200,
        unit = 'px',
        selector = 'akj-'

    var elements = document.querySelectorAll('[class*=' + selector + ']');

    var vewportWidth = window.innerWidth;

    for (var i = 0; i < elements.length; i++) {

        //var allClass = elements[i].classList;
        var allClass = ["test1", "test2", "test3", "akj-pt-md-15"];
        console.log(allClass);

        var className = allClass.find(test);

        function test(value) {
            if (/^akj-/.test(value))
                return value;
        }

        var required = className.substr(4),
            value = required.match(/\d/g).toString().replace(",", ""),
            cases = required.replace(/\d/g, '');

        // Starting Cases for padding
        if (/^p/.test(required)) {
            // Case will execute on all the screen sizes
            switch (cases) {
                case 'p-':
                    elements[i].style.padding = value + unit;
                    break;
                case 'pt-':
                    elements[i].style.paddingTop = value + unit;
                    break;
                case 'pb-':
                    elements[i].style.paddingBottom = value + unit;
                    break;
                case 'pl-':
                    elements[i].style.paddingLeft = value + unit;
                    break;
                case 'pr-':
                    elements[i].style.paddingRightTop = value + unit;
                    break;
            }
            // Case will execute on mobile screens
            if (vewportWidth < sm) {
                switch (cases) {
                    case 'p-xs-':
                        elements[i].style.padding = value + unit;
                        break;
                    case 'pt-xs-':
                        elements[i].style.paddingTop = value + unit;
                        break;
                    case 'pb-xs-':
                        elements[i].style.paddingBottom = value + unit;
                        break;
                    case 'pl-xs-':
                        elements[i].style.paddingLeft = value + unit;
                        break;
                    case 'pr-xs-':
                        elements[i].style.paddingRightTop = value + unit;
                        break;
                }
            }
            
            // Case will execute on small screens    
            if (vewportWidth >= sm && vewportWidth < md ) {
                switch (cases) {
                    case 'p-sm-':
                        elements[i].style.padding = value + unit;
                        break;
                    case 'pt-sm-':
                        elements[i].style.paddingTop = value + unit;
                        break;
                    case 'pb-sm-':
                        elements[i].style.paddingBottom = value + unit;
                        break;
                    case 'pl-sm-':
                        elements[i].style.paddingLeft = value + unit;
                        break;
                    case 'pr-sm-':
                        elements[i].style.paddingRightTop = value + unit;
                        break;
                }
            }
            
            // Case will execute on medium devices    
            if (vewportWidth >= md && vewportWidth < lg ) {
                switch (cases) {
                    case 'p-md-':
                        elements[i].style.padding = value + unit;
                        break;
                    case 'pt-md-':
                        elements[i].style.paddingTop = value + unit;
                        break;
                    case 'pb-md-':
                        elements[i].style.paddingBottom = value + unit;
                        break;
                    case 'pl-md-':
                        elements[i].style.paddingLeft = value + unit;
                        break;
                    case 'pr-md-':
                        elements[i].style.paddingRightTop = value + unit;
                        break;
                }
            }
            
             // Case will execute on large devices    
            if (vewportWidth >= lg ) {
                switch (cases) {
                    case 'p-lg-':
                        elements[i].style.padding = value + unit;
                        break;
                    case 'pt-lg-':
                        elements[i].style.paddingTop = value + unit;
                        break;
                    case 'pb-lg-':
                        elements[i].style.paddingBottom = value + unit;
                        break;
                    case 'pl-lg-':
                        elements[i].style.paddingLeft = value + unit;
                        break;
                    case 'pr-lg-':
                        elements[i].style.paddingRightTop = value + unit;
                        break;
                }
            }
        }
    }
})();
