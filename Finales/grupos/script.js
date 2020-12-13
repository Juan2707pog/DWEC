        function añadirGrupos() {
            let miembros = document.getElementById('member').value;
            const cantidad = document.getElementById('numerogrupos').value;
            const tablas = document.getElementById('groups');
            let td = document.createElement('td');
            let tr = document.createElement('td');
           if (miembros.indexOf(',')>=0 && cantidad>=0){
                miembros = miembros.split(',');
                 for (let g = 0;g<cantidad;g++){
                          td.append(`Grupo${g+1}: ${mezclador(miembros)}\r`);
                          tr.append(td);
                          tablas.append(tr);
                  }
            } 
        }
        function mezclador(m) {
            for (let cont = 0; cont < m.length; cont++) {
                let r = Math.floor(Math.random() * (cont + 0));
                let temp = m[cont];
                m[cont] = m[r];
                m[r] = temp;
            }
            return m;
        }

