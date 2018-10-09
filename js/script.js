/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Here are variables that store DOM elements I referenced and/or manipulated.
let pageNumber = 1;
const studentList = document.getElementsByClassName('student-list')[0];

// This is a function to hide all of the items in the list excpet for the ten I want to show
const showPage = (list, page) => {
    const listLength = list.childElementCount;
    const firstElementIndex = (page - 1) * 10;
    const lastElementIndex = firstElementIndex + 9;

    for (let i = 0; i < listLength; i++) {
        if (i >= firstElementIndex && i <= lastElementIndex) {
            list.children[i].style.display = '';
        } else {
            list.children[i].style.display = 'none';
        }
    }
}


// Here is a function which creates and appends the pagination links.
const appendPageLinks = (list) => {
    const numPages = Math.ceil(list.childElementCount / 10);

    document.getElementsByClassName('pagination')[0].remove();

    let paginationDiv = document.createElement('div');
    paginationDiv.className = 'pagination';
    document.getElementsByClassName('page')[0].appendChild(paginationDiv);

    let paginationUl = document.createElement('ul');
    paginationDiv.appendChild(paginationUl);

    for (let i = 1; i <= numPages; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');

        a.textContent = i;
        a.href = '#';
        a.addEventListener("click", () => {
            pageNumber = a.innerHTML;
            showPage(studentList, pageNumber);
            for (let j = 0; j < numPages; j++) {
                paginationUl.childNodes[j].firstChild.classList.remove('active');
            }
            event.target.className = 'active';
        });
        paginationUl.appendChild(li);
        li.appendChild(a);
    }
    paginationUl.firstChild.firstChild.className = 'active';
}


// Here I call 2 functions I created above.

showPage(studentList, pageNumber);
appendPageLinks(studentList);
