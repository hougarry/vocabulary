document.addEventListener('DOMContentLoaded', (event) => {
    const vocabCardTemplate = document.querySelector('[data-vocab-template]');
    const vocabCardContainer = document.querySelector('[data-vocab-cards-container]');
    const searchInput = document.querySelector('[data-search]');

    let vocabList = [];

    searchInput.addEventListener('input', e => {
        const value = e.target.value.toLowerCase();
        vocabList.forEach(vocabItem => {
            const isVisible =
                vocabItem.vocabulary.toLowerCase().includes(value) ||
                vocabItem.definition.toLowerCase().includes(value);
            vocabItem.element.classList.toggle('hidden', !isVisible);
        });
    });

    // Replace with the path to your local JSON file
    fetch('vocabulary.json')
        .then(res => res.json())
        .then(data => {
            vocabList = data.map(vocabItem => {
                const vocabCard = vocabCardTemplate.content.cloneNode(true).children[0];
                const vocabHeader = vocabCard.querySelector('[data-vocab-header]');
                const vocabBody = vocabCard.querySelector('[data-vocab-body]');
                const vocabPronunciation = vocabCard.querySelector('[data-vocab-pronunciation]');
                const vocabExample = vocabCard.querySelector('[data-vocab-example]');
                const vocabMnemonic = vocabCard.querySelector('[data-vocab-mnemonic]');
                const vocabFamily = vocabCard.querySelector('[data-vocab-family]');
                const vocabPrediction = vocabCard.querySelector('[data-vocab-prediction]');

                vocabHeader.textContent = vocabItem.vocabulary;
                vocabBody.textContent = vocabItem.definition;
                vocabPronunciation.textContent = vocabItem.pronunciation;
                vocabExample.textContent = vocabItem.example;
                vocabMnemonic.textContent = vocabItem.mnemonic;
                vocabFamily.textContent = vocabItem.family.join(', ');
                vocabPrediction.textContent = vocabItem.prediction;
                vocabCardContainer.append(vocabCard);

                return { ...vocabItem, element: vocabCard };
            });
        }).catch(err => {
            console.error('Error loading the vocabulary:', err);
        });


});
  








