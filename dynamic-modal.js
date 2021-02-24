dynamicModal = () => {

    const modalList = document.querySelectorAll('[data-dynamic-modal]');
    const trigger = document.querySelectorAll('[data-dynamic-modal-trigger]');

    trigger.forEach(item => item.addEventListener('click', event => {

        const dataSet = event.currentTarget.dataset;
        const dataKeys = Object.keys(dataSet)
            .filter(item => item.includes('dynamicModal') && !item.includes('dynamicModalTrigger'));

        if (dataKeys) {

            dataKeys.forEach(item => {

                const currentDataSet = dataSet[item];
                const { name, attribute, value } = JSON.parse(currentDataSet);

                modalList.forEach(modal => {

                    const elements = modal.querySelectorAll(`[data-dynamic-modal-item=${name}]`);
                    elements.forEach(element => element.setAttribute(attribute, value));
                    
                });
            });
        }
    }));
}

//That´s how to use
dynamicModal();
