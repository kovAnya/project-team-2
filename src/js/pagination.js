import Pagination from 'tui-pagination';

const options = { // below default value of options
     totalItems: '',
     itemsPerPage: 20,
     visiblePages: 5,
     page: 1,
     centerAlign: true,
     totalPages:"",
     firstItemClassName: 'tui-first-child',
     lastItemClassName: 'tui-last-child',
     template: {
         page: '<a href="#" class="tui-page-btn">{{page}}</a>',
         currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
         moveButton:
             '<a href="#" class="tui-page-btn tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</a>',
         disabledMoveButton:
             '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</span>',
         moreButton:
             '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
                 '<span class="tui-ico-ellip">...</span>' +
             '</a>'
     }
};

options.totalPages = 1000;
options.totalItems = 20000;

const container = document.getElementById('tui-pagination-container');
const pagination = new Pagination(container, options);

pagination.getCurrentPage();

