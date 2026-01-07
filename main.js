// ========== status GLOBAL DEL JUEGO ==========
const gameState = {
    challenges: {
        access: { status: 'active', completed: false, solution: {code: "1016"}, answer: {code: ''}},
        electricity: { status: 'locked', completed: false, solution: {} },
        fences: { status: 'locked', completed: false, solution: {} },
        bridge: { status: 'locked', completed: false, solution: {} },
        helicopter: { status: 'locked', completed: false, solution: {} }
    },
    documents: [
        { id: 1, title: "Protocolo de emergencia y evacuación", show: true, read: false,
            text: `
                <p>En caso de fallo de todos los sistemas del parque, siga los siguientes pasos:</p>     
                <div class="challenges-list">
                    <p><span id="access" class="checkbox">☐</span> Acceder a los sistemas</p>
                    <p><span id="electricity" class="checkbox">☐</span> Restablecer la electricidad</p>
                    <p><span id="fences" class="checkbox">☐</span> Reactivar las cercas eléctricas</p>
                    <p><span id="bridge" class="checkbox">☐</span> Bajar el puente</p>
                    <p><span id="helicopter" class="checkbox">☐</span> Llamar al helicóptero</p>
                </div>
        `},
        { id: 2, title: "✉ Seguridad", show: true, read: false,
            text: `
                <p><i>dennisnedry@jurassicpark.com</i></p><br>
                <p>Se le notifica que se ha realizado el cambio mensual de la contraseña de los sitemas.<br>
                Es la suma de los pesos de un dinosaurio herbívoro del periodo Cretácico y el dinosaurio más pequeño.</p>
        `},
        { id: 3, title: "Guía paleontológica", show: true, read: false,
            text: "Helipuerto en coordenadas X: 7, Y: 7. Evitar sector T-Rex en X: 3, Y: 3." },
        { id: 4, title: "Manual de sistemas", show: false, read: false,
            text: "El puente necesita 8m de madera. Resistencia: 500kg/m. Peso jeep: 2500kg." },
        { id: 5, title: "✉ Felicitación navideña", show: false, read: false,
            text: `
                <p><i>johnhammond@jurassicpark.com</i></p><br>
                <p>Hola a todos:<br><br>
                Os felicito por el gran trabajo realizado en el parque este año. Seguid trabajando duro para que la próxima inauguración
                de Jurassic Park™ sea un éxito. ¡Os deseo feliz Navidad!<br><br>
                Un saludo,<br>
                John Hammond, presidente<br><br>
                P.d: Este año la cesta viene acompañada de un cheque regalo.</p>
        `}
    ],
    currentChallenge: 0,
    currentSector: 0,
};

const tabContents = {
    comms: `
        <h3>📻 Sistema de Comunicación</h3>
        <p>Contacta con el helicóptero de rescate.</p>
        
        <div class="radio-controls">
            <div class="freq-display">
                <label>Frecuencia:</label>
                <input type="text" id="freq-input" value="121.5" disabled>
                <span>MHz</span>
            </div>
            
            <div class="message-section">
                <h4>Mensaje recibido (Morse):</h4>
                <div class="morse-display" id="morse-display">... --- ...</div>
                
                <h4>Traducir a texto:</h4>
                <input type="text" id="decode-input" placeholder="SOS">
                <button onclick="verificarDecodificacion()">Verificar</button>
                
                <h4>Enviar respuesta (Binario):</h4>
                <div>Mensaje: "EN RUTA"</div>
                <div class="binary-hint">(Consulta los documents para la tabla ASCII)</div>
                <input type="text" id="binary-input" placeholder="01000101 01001110...">
                <button onclick="verificarBinario()">Transmitir</button>
            </div>
        </div>
    `,
    
    system: `
        <div class="system-code-container">
            <h3>Acceso a los Sistemas de Jurassic Park</h3>
            <p>Introduzca la contraseña:</p>
            
            <div class="system-code" id="system-code">____</div>
            <div class="system-code-btn-grid">
                <button class="system-code-btn" onclick="addDigit(1)">1</button>
                <button class="system-code-btn" onclick="addDigit(2)">2</button>
                <button class="system-code-btn" onclick="addDigit(3)">3</button>
                <button class="system-code-btn" onclick="addDigit(4)">4</button>
                <button class="system-code-btn" onclick="addDigit(5)">5</button>
                <button class="system-code-btn" onclick="addDigit(6)">6</button>
                <button class="system-code-btn" onclick="addDigit(7)">7</button>
                <button class="system-code-btn" onclick="addDigit(8)">8</button>
                <button class="system-code-btn" onclick="addDigit(9)">9</button>
                <button class="system-code-btn" onclick="clearCode()">CLEAR</button>
                <button class="system-code-btn" onclick="addDigit(0)">0</button>
                <button class="system-code-btn" onclick="checkSecurityCode()">ENTER</button>
            </div>
        </div>
    `,

    systemUnlocked: `

    `,
    
    systemElectric: `

    `,
    
    systemSecurity: `

    `,

    systemBridge: `

    `,
    
    docs: `        
        <div id="documents-list">
            <!-- Se generan dinámicamente -->
        </div>
    `,
};

// BUCLE DE JUEO: pestañas, cargar la pestaña inicial, temporizador
window.onload = function() {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.onclick = () => changeTab(tab.dataset.tab);
    });

    document.getElementById('tab-content').innerHTML = tabContents.comms;

    startTimer(60 * 60); // 60 min
};


// TEMPORIZADOR
function startTimer(timerTime) {
    let time = timerTime;
    const timer = setInterval(() => {
        time--;
        const min = Math.floor(time / 60);
        const secs = time % 60;
        document.getElementById('header-timer').textContent = 
            `${min.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        
        // Añadir avisos de tiempo (alertas)
        if (time <= 0) {
            clearInterval(timer);
            alert('⏰ ¡time AGOTADO! Los dinosaurios han alcanzado el jeep.');
        }
    }, 1000);
}

// PESTAÑAS: cambia a la pestaña recibida (class "tab active"), carga su contenido y el área visual (izq)
function changeTab(tabId) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    
    document.getElementById('tab-content').innerHTML = tabContents[tabId];
    
    changeVisuals(tabId);
    
    if (tabId === 'docs') loadDocumentList();   // Si es la pestaña documentos, carga la lista
    if (tabId === 'system') updateCodeDisplay();    // Si hay código escrito al volver a la pestaña se muestra
}

// ÁREA VISUAL: cambia a los visuales (izq) de la pestaña recibida
function changeVisuals(tabId) {
    document.querySelectorAll('.visual-content').forEach(v => v.classList.remove('active'));
    
    switch(tabId) {
        case 'comms':
            document.getElementById('visual-comms').classList.add('active');
            break;
        case 'system':
            document.getElementById('visual-systems').classList.add('active');
            showSystemsDefaultVisual();
            break;
        case 'docs':
            document.getElementById('visual-docs').classList.add('active');
            showDocsDefaultVisual();
            break;
        default:
            document.getElementById('visual-comms').classList.add('active');
    }
}

// SISTEMAS: carga el área visual por defecto de los sistemas
function showSystemsDefaultVisual() {
    const docsContent = document.getElementById('visual-systems');
    docsContent.innerHTML = `
        <div class="aa">
            <img src="images/jurassic-park-systems.png" alt="Jurassic Park Logo">
        </div>
    `;
}

// DOCUMENTOS: carga el área visual por defecto de los documentos
function showDocsDefaultVisual() {
    const docsContent = document.getElementById('docs-content');
    docsContent.innerHTML = `
        <div class="docs-visual-default">
            <img class="jurassic-park-logo-docs" src="images/jurassic-park-logo.svg" alt="Jurassic Park Logo">
            <p>Correos & Documentos</p>
        </div>
    `;
}


// DOCUMENTOS: carga la lista de documentos visibles y marca los leídos
function loadDocumentList() {
    const list = document.getElementById('documents-list');
    list.innerHTML = '';
    
    gameState.documents.forEach(doc => {
        if (doc.show) {
            const div = document.createElement('div');
            //div.className = `document ${doc.read ? '' : 'unread'}`;
            div.className = `document`;
            div.setAttribute('data-id', doc.id);    // Resaltar en showDocument()
            div.innerHTML = `
                <strong>${doc.title}</strong>
                ${doc.read ? '<span class="document-read"> (LEÍDO)</span>' : ''}
            `;
            div.onclick = () => showDocument(doc.id);
            list.appendChild(div);
        }
    });
}

// DOCUMENTOS: muestra el documento en el área visual (izq)
function showDocument(id) {
    const doc = gameState.documents.find(d => d.id === id);
    if (!doc) return;
    
    doc.read = true;

    // Mostrar en el área visual (izq)
    const docsContent = document.getElementById('docs-content');
    docsContent.innerHTML = `
        <h3 style="margin-bottom:10px;">${doc.title}</h3><hr><br>
        <p>${doc.text}</p>
    `;

    loadDocumentList()  // Recargar para LEÍDO

    // Resaltar el documento en la lista del área interactiva (der)
    document.querySelectorAll('.document').forEach(t => t.classList.remove('active'));
    const activeDocumentElement = document.querySelector(`.document[data-id="${id}"]`);
    if (activeDocumentElement) {
        activeDocumentElement.classList.add('active');
    }

    /*
        const listaDocumentos = document.getElementById('documents-list');
        const todosDocumentos = listaDocumentos.querySelectorAll('.document');

        // Primero: remover 'active' de todos en esta lista
        todosDocumentos.forEach(doc => doc.classList.remove('active'));

        // Segundo: agregar 'active' al específico
        const documentoActivo = listaDocumentos.querySelector(`.document[data-id="${id}"]`);
        if (documentoActivo) {
            documentoActivo.classList.add('active');
        }
    */

    if (id == 1) updateChecklist(); // Actualiza la lista de tareas (checkbox)
}

// DOCUMENTOS: actualiza la lista de tareas (checkbox)
function updateChecklist() {
    for (const challengeId in gameState.challenges) {
        if (gameState.challenges[challengeId].completed) {
            const taskCheckbox = document.getElementById(challengeId);
            taskCheckbox.textContent = '☑';
            //taskCheckbox.classList.add('active');
        } 
    }
}

// RETOS: marcar el reto recibido como completado
function challengeCompleted(challengeId) {
    if (!gameState.challenges[challengeId].completed) {
        gameState.challenges[challengeId].completed = true;
        gameState.currentChallenge = challengeId;
        
        //updateChecklist();
    }
}

// RETO 1: acceso a los sistemas
function addDigit(digit) {
    const systemCode = document.getElementById('system-code');
    systemCode.classList.remove('correct');
    systemCode.classList.remove('incorrect');
    if (gameState.challenges.access.answer.code.length < 4) {
        gameState.challenges.access.answer.code += digit;
        updateCodeDisplay();
    }
}

function clearCode() {
    gameState.challenges.access.answer.code = '';
    updateCodeDisplay();
}

function updateCodeDisplay() {
    const display = document.getElementById('system-code');
    display.textContent = gameState.challenges.access.answer.code.padEnd(4, '_');
}

function checkSecurityCode() {
    const systemCode = document.getElementById('system-code');
    if (gameState.challenges.access.answer.code === gameState.challenges.access.solution.code) {
        systemCode.classList.add('correct');
        gameState.challenges.access.completed = true;
        //challengeCompleted
    } else {
        systemCode.classList.add('incorrect');
    }
    
    updateProgress();
    checkGameComplete();
}