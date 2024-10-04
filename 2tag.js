document.addEventListener('DOMContentLoaded', () => {
    const tagInput = document.getElementById('tag-input');
    const tagsList = document.getElementById('tags');
    
    let tags = [];

    const createTag = (tagText) => {
        const li = document.createElement('li');
        li.textContent = tagText;

        const removeIcon = document.createElement('span');
        removeIcon.textContent = 'x';
        removeIcon.classList.add('remove-tag');
        removeIcon.onclick = () => {
            tags = tags.filter(tag => tag !== tagText);
            renderTags();
        };

        li.appendChild(removeIcon);
        return li;
    };

    const renderTags = () => {
        tagsList.innerHTML = '';
        tags.forEach(tag => {
            tagsList.appendChild(createTag(tag));
        });
    };

    tagInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter' && tagInput.value.trim() !== '') {
            const newTag = tagInput.value.trim();
            if (!tags.includes(newTag)) {
                tags.push(newTag);
                renderTags();
            }
            tagInput.value = '';
        }
    });

    tagInput.addEventListener('blur', () => {
        if (tagInput.value.trim() !== '') {
            const newTag = tagInput.value.trim();
            if (!tags.includes(newTag)) {
                tags.push(newTag);
                renderTags();
            }
            tagInput.value = '';
        }
    });
});
