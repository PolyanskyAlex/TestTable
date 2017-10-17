function getMaxOfArray(numArray) {
    if (numArray.length > 0) {
        return Math.max.apply(null, numArray);
    } else {return 0;}
}

var app = new Vue ({
    el: '#table-app',
    data: {
        rows: [] //Массив строк.
    },
    methods: {
    // Добавляем строку.
        insertRow: function() {
            this.rows.splice(0, 0, {id: app.idCounter + 1});
        },
    //Удаляем строку.
        deleteRow: function(id) {
            var curIndex = this.rows.findIndex(function(row) {
                return row.id == id;
            });
            this.rows.splice(curIndex, 1);
        }
    },
    computed: {
    // Счетчик, возвращающий максимальный id элемента массива rows, необходим
    // для генерации новых строк таблицы.
            idCounter: function() {
                var ids = this.rows.map(function(row) {
                   return row.id;
                });
                return getMaxOfArray(ids) || 0;
            },
    //Функция расчета "итого".
            totalSum: function() {
                if (this.rows.length > 0) {
                    return this.rows.map(function(row) {
                        return parseInt(row.amount) * parseFloat(row.price) || 0;
                    }).reduce(function(a, b) {
                        return a + b;
                    });
                } else { return 0;}
          }
    }
});
