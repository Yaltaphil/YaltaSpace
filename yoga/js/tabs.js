function initTabs(panel, buttons, content) {

    'use strict';

    console.log('Tabs module connected');

    let tabPanel = document.querySelector('.' + panel),
        // tabButton = document.querySelectorAll(buttons),
        tabContent = document.querySelectorAll('.' + content);


    function hideAll() {
        tabContent.forEach((tab) => {
            tab.classList.remove('show');
            tab.classList.add('hide');
        });
    }


    function showTabContent(num) {
        if (tabContent[num].classList.contains('hide')) {
            tabContent[num].classList.remove('hide');
            tabContent[num].classList.add('show');
        }
    }


    hideAll();

    showTabContent(0);

    tabPanel.addEventListener('click', function (event) {
        let target = event.target;
        // console.log( Array.prototype.indexOf.call(this.children, target));
        // console.log( [...target.parentNode.children].indexOf(target));
        // console.log( [...this.children].indexOf(target));
        if (target.classList.contains(buttons)) {
            hideAll();
            showTabContent([...this.children].indexOf(target));
        }
    });
}


export {initTabs};






