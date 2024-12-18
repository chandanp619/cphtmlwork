
class Table2List {
    constructor(table, screenSize) {
        this.table = table;
        this.tableClass =this.table.getAttribute('class');
        this.tableId = this.table.getAttribute('id');
        this.list = document.createElement('ul');
        this.list.setAttribute('class', this.tableClass);
        this.list.setAttribute('id', this.tableId);
        this.screenSize = screenSize;
        this.headers = [];
        this.data = [];

        window.addEventListener('resize', () => {
            if(window.innerWidth < this.screenSize) {
                this.generateData();
                this.renderList();
            }else{
                this.list.replaceWith(this.table);
            }
        });

        if(window.innerWidth < this.screenSize) {
            this.generateData();
            this.renderList();
        }
    }

    generateData() {
        let headerRow = this.table.rows[0];
    
        this.data = [];
        for(let i = 0; i < headerRow.cells.length; i++) {
            let cell = headerRow.cells[i];
            this.headers[i] = cell.textContent;
        }
        console.log(this.headers);
    

        for(let i = 1; i < this.table.rows.length; i++) {
            let row = this.table.rows[i];
            let cells = [];
            for(let j = 0; j < row.cells.length; j++) {
                let cell = row.cells[j];
                cells[j] = cell.textContent;
            }
            this.data.push(cells);
        }

        console.log(this.data);
    }

    renderList() {
        this.list.innerHTML = '';
        for(let i = 0; i < this.data.length; i++) {
            let item = document.createElement('li');
            for(let j = 0; j < this.data[i].length; j++) {
                let div = document.createElement('div');
                let span1 = document.createElement('span');
                span1.classList.add('field-title');
                span1.setAttribute('style', 'font-weight: bold; margin-right: 10px;');
                let span2 = document.createElement('span');
                span2.classList.add('field-value');
                span1.textContent = this.headers[j]
                span2.textContent = this.data[i][j];

                div.appendChild(span1);
                div.appendChild(span2);

                item.appendChild(div);
            }
            this.list.appendChild(item);
        }
        this.table.replaceWith(this.list);
    }
}