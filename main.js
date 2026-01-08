// ========== status GLOBAL DEL JUEGO ==========
const gameState = {
    challenges: {
        access: { status: 'active', completed: false, solution: {code: "6015"}, answer: {code: ''}},
        electricity: { status: 'locked', completed: false, solution: {} },
        security: { status: 'locked', completed: false, solution: {code: "1111"}, answer: {code: ''} },
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
                    <p><span id="security" class="checkbox">☐</span> Reactivar las cercas eléctricas</p>
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
            text: `
                <div class="dinosaur-wiki">
                    <h4>Tyrannosaurus Rex</h4>
                    <p>Su nombre en griego significa "rey lagarto tirano". Era uno de los depredadores bípedos más feroces. 
                    Tenía un cráneo y dientes muy grandes lo que le aportaba una mordida poderosa. 
                    A pesar de su corta longitud, sus brazos eran robustos y terminaban en dos afiladas garras.</p>
                    <ul>
                        <li><b>Periodo:</b> Cretácico Superior (~68-66 millones de años)</li>
                        <li><b>Longitud:</b> 13m</li>
                        <li><b>Peso:</b> 9t</li>
                        <li><b>Alimentación:</b> carnívoro</li>
                        <li><b>Cerca:</b> </li>
                    </ul>
                    <img src="images/tyrannosaurus-rex.jpg" alt="Tyrannosaurus Rex">
                    <br><br>
                    <h4>Velociraptor</h4>
                    <p>Su nombre, que en griego significa "ladrón veloz". Era depredador pequeño, ágil y emplumado. 
                    Su arma más temible era una gran garra en forma de hoz en cada pata trasera, 
                    que usaba para herir mortalmente a sus presas, a las que probablemente cazaba en grupo.</p>
                    <ul>
                        <li><b>Periodo:</b> Cretácico Superior (~75-71 millones de años)</li>
                        <li><b>Longitud:</b> 1,8m</li>
                        <li><b>Peso:</b> 15kg</li>
                        <li><b>Alimentación:</b> carnívoro</li>
                        <li><b>Cerca:</b> </li>
                    </ul>
                    <img src="images/velociraptor.jpg" alt="velociraptor">
                    <br><br>
                    <h4>Triceratops</h4>
                    <p> Su nombre en griego significa "cara con tres cuernos". 
                    Este dinosaurio tenía una gran cabeza con tres cuernos y un volante óseo (gola) que protegía su cuello. 
                    Era un animal robusto y cuadrúpedo, con una poderosa mandíbula en forma de pico para cortar vegetación dura.</p>
                    <ul>
                        <li><b>Periodo:</b> Cretácico Superior (~68-66 millones de años)</li>
                        <li><b>Longitud:</b> 9m</li>
                        <li><b>Peso:</b> 6t</li>
                        <li><b>Alimentación:</b> hervíboro</li>
                        <li><b>Cerca:</b> </li>
                    </ul>
                    <img src="images/triceratops.jpg" alt="Triceratops">
                    <br><br>
                    <h4>Brachiosaurus Altithorax</h4>
                    <p>Su nombre, que en griego significa "lagarto brazo de tórax alto", describe su anatomía. 
                    Tenía un cuello muy largo y sus patas delanteras más largas que las traseras, algo inusual en los dinosaurios saurópodos. 
                    Esta adaptación le permitía alimentarse de las hojas más altas de los árboles, era folívoro.</p>
                    <ul>
                        <li><b>Periodo:</b> Jurásico Superior (~154-153 millones de años)</li>
                        <li><b>Longitud:</b> 26m</li>
                        <li><b>Peso:</b> 50t</li>
                        <li><b>Alimentación:</b> hervíboro</li>
                        <li><b>Cerca:</b> </li>
                    </ul> 
                    <img src="images/brachiosaurus.jpg" alt="Brachiosaurus Altithorax">
                </div>
            `},

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
    
    systemBlocked: `
        <div class="system-code-container">
            <h3>Acceso a los Sistemas de Jurassic Park</h3>
            <p>Introduzca la contraseña:</p>
            
            <div id="system-code" class="system-code">____</div>
            <div class="system-code-btn-grid">
                <button class="system-code-btn" onclick="systemCodeAddDigit(1)">1</button>
                <button class="system-code-btn" onclick="systemCodeAddDigit(2)">2</button>
                <button class="system-code-btn" onclick="systemCodeAddDigit(3)">3</button>
                <button class="system-code-btn" onclick="systemCodeAddDigit(4)">4</button>
                <button class="system-code-btn" onclick="systemCodeAddDigit(5)">5</button>
                <button class="system-code-btn" onclick="systemCodeAddDigit(6)">6</button>
                <button class="system-code-btn" onclick="systemCodeAddDigit(7)">7</button>
                <button class="system-code-btn" onclick="systemCodeAddDigit(8)">8</button>
                <button class="system-code-btn" onclick="systemCodeAddDigit(9)">9</button>
                <button class="system-code-btn" onclick="systemCodeClear()">CLEAR</button>
                <button class="system-code-btn" onclick="systemCodeAddDigit(0)">0</button>
                <button class="system-code-btn" onclick="systemCodeCheck()">ENTER</button>
            </div>
        </div>
    `,

    systemUnlocked: `
        <h3 class="systems-title">Sistemas de Jurassic Park</h3>
        <div class="systems-btns">
            <button id="system-electricity-btn" class="system-btn" onclick="openSystem('systemElectricity')">
                <span class="system-btn-label">Electricidad</span>
            </button>
            <button id="system-security-btn" class="system-btn" onclick="openSystem('systemSecurity')">
                <span class="system-btn-label">Seguridad</span>
            </button>
            <button id="system-bridge-btn" class="system-btn" onclick="openSystem('systemBridge')">
                <span class="system-btn-label">Puente</span>
            </button>
        </div>
    `,
    
    systemElectricity: `

    `,
    
    systemSecurity: `
        <div class="system-slider-container">
            <h3>Sistema de seguridad - Cercas Eléctricas</h3>
            <p>Ajustes de cada sector:</p>
           
            <div class="slider-sectors">
                    <label>A</label>
                    <label>B</label>
                    <label>C</label>
                    <label>D</label>
            </div>     
            <div class="slidergrid">
                <div class="slider-labels">
                    <label>30 kV --</label
                    <label>25 kV --</label>
                    <label>20 kV --</label>
                    <label>15 kV --</label>
                    <label>10 kV --</label>
                    <label>05 kV --</label>
                    <label>00 kV --</label>
                </div>     
                <div class="slider-container"><input class="slider" type="range" min="1" max="7" step="1" value="0"></div>
                <div class="slider-container"><input class="slider" type="range" min="1" max="7" step="1" value="0"></div>
                <div class="slider-container"><input class="slider" type="range" min="1" max="7" step="1" value="0"></div>
                <div class="slider-container"><input class="slider" type="range" min="1" max="7" step="1" value="0"></div>
            </div>
            <div>
                <button class="system-code-btn" onclick="backToSystem()">↲ ATRÁS</button>
                <button id="system-security-check-btn" class="system-code-btn" onclick="systemSecurityCheck()">⏻ ACTIVAR</button>
            </div>
        </div>
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

    // Si no se ha superado el reto 1 (access) se muestra el panel (bloqueado), de lo contrario los botones del sistema (desbloqueado)
    if (tabId === 'system') {
        if (!gameState.challenges.access.completed) {
            document.getElementById('tab-content').innerHTML = tabContents.systemBlocked;
            systemCodeUpdateDisplay();  // Si hay código escrito al volver a la pestaña se muestra
        } else {
            document.getElementById('tab-content').innerHTML = tabContents.systemUnlocked;      
        }
    } else {
        // Para otras pestañas, cargar contenido normal
        document.getElementById('tab-content').innerHTML = tabContents[tabId];
    }
    
    changeVisuals(tabId);

    if (tabId === 'docs') loadDocumentList();   // Si es la pestaña documentos, carga la lista
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
            showSystemVisual('systemDefault');
            break;
        case 'docs':
            document.getElementById('visual-docs').classList.add('active');
            showDocsDefaultVisual();
            break;
        default:
            document.getElementById('visual-comms').classList.add('active');
    }
}

// SISTEMAS: carga los visuales de cada sistema (delay intencional)
function showSystemVisual(system) {
    const applySystem = () => {
        document.querySelectorAll('.system-visual').forEach(v => v.classList.remove('active'));
        
        switch(system) {
            case 'systemDefault':
                document.getElementById('visual-system-default').classList.add('active');
                break;
            case 'systemElectricity':
                document.getElementById('visual-system-electricity').classList.add('active');
                updateElectricityVisual();
                break;
            case 'systemSecurity':
                document.getElementById('visual-system-security').classList.add('active');
                updateSecurityVisual();
                break;
            case 'systemBridge':
                document.getElementById('visual-system-bridge').classList.add('active');
                updateBridgeVisual();
                break;
        }
    };

    if (system === 'systemDefault') applySystem();
    else setTimeout(applySystem, 500);
}

function updateElectricityVisual() {
    const electricityImg = document.querySelector('#visual-system-electricity img');
    if (gameState.challenges.electricity.completed) {
        electricityImg.src = 'images/electricity-visual-completed.png';
    } else {
        electricityImg.src = 'images/electricity-visual-incomplete.png';
    }
}

function updateSecurityVisual() {
    const securityImg = document.querySelector('#visual-system-security img');
    if (gameState.challenges.fences.completed) {
        securityImg.src = 'images/security-visual-completed.png';
    } else {
        securityImg.src = 'images/security-visual-incomplete.png';
    }
}

function updateBridgeVisual() {
    const bridgeImg = document.querySelector('#visual-system-bridge img');
    if (gameState.challenges.bridge.completed) {
        bridgeImg.src = 'images/bridge-down.png';
    } else {
        bridgeImg.src = 'images/bridge-up.png';
    }
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
function systemCodeAddDigit(digit) {
    systemCodeClearDisplayColor();

    if (gameState.challenges.access.answer.code.length < 4) {
        gameState.challenges.access.answer.code += digit;
        systemCodeUpdateDisplay();
    }
}

// RETO 1: acceso a los sistemas
function systemCodeClear() {
    systemCodeClearDisplayColor();
    gameState.challenges.access.answer.code = '';
    systemCodeUpdateDisplay();
}

// RETO 1: acceso a los sistemas
function systemCodeUpdateDisplay() {
    const display = document.getElementById('system-code');
    display.textContent = gameState.challenges.access.answer.code.padEnd(4, '_');
}

function systemCodeClearDisplayColor() {
    const systemCode = document.getElementById('system-code');
    systemCode.classList.remove('correct');
    systemCode.classList.remove('incorrect');
}

// RETO 1: acceso a los sistemas
function systemCodeCheck() {
    const systemCode = document.getElementById('system-code');
    if (gameState.challenges.access.answer.code === gameState.challenges.access.solution.code) {
        systemCode.classList.add('correct');
        gameState.challenges.access.completed = true;
        gameState.documents.find(d => d.id === 4).show = true;
        gameState.documents.find(d => d.id === 5).show = true;

        // Desactivar los botones
        const buttons = document.querySelectorAll('.system-code-btn');
        buttons.forEach(btn => { btn.disabled = true; });

        //challengeCompleted
        // Actualiza la pestaña system despues de X tiempo
        setTimeout(() => { document.getElementById('tab-content').innerHTML = tabContents.systemUnlocked; }, 500);
    } else {
        systemCode.classList.add('incorrect');
    }
    
    //updateProgress();
    //checkGameComplete();
}


// NAVEGACIÓN ENTRE SISTEMAS: abrir sistemas (delay intencional)
function openSystem(systemId) {
    const all = document.querySelectorAll('*');
    all.forEach(el => el.style.cursor = 'wait');
    
    setTimeout(() => {
        document.getElementById('tab-content').innerHTML = tabContents[systemId];
        all.forEach(el => el.style.cursor = '');
        if (gameState.challenges.security.completed) applySecurityState();
    }, 500);

    showSystemVisual(systemId);
}

// NAVEGACIÓN ENTRE SISTEMAS: volver al selector de sistemas
function backToSystem() {
    document.getElementById('tab-content').innerHTML = tabContents.systemUnlocked;
    showSystemVisual('systemDefault');
}

// RETO 3: reactivar las cercas eléctricas
function systemSecurityCheck() {
    const sliders = document.querySelectorAll('.slider');
    let answer = "";

    sliders.forEach(slider => { answer += slider.value; });
    gameState.challenges.security.answer.code = answer;

    checkButton = document.getElementById('system-security-check-btn');

    if (answer === gameState.challenges.security.solution.code) {
        gameState.challenges.security.completed = true;

        // Desactivar los botones
        const sliders = document.querySelectorAll('.slider');
        sliders.forEach(sld => { sld.disabled = true; });

        checkButton.disabled = true;
        checkButton.classList.add('correct');

    } else {
        checkButton.classList.add('incorrect');
        setTimeout(() => { checkButton.classList.remove('incorrect'); }, 500);
    }
}

// RETO 3: conservar los valores de los sliders, botones desabilitados y btón activar verde
function applySecurityState() {
    const code = gameState.challenges.security.answer.code
    const sliders = document.querySelectorAll('.slider');

    for (let i = 0; i < code.length; i++) {
        sliders[i].value = code[i];
    }
    
    if (gameState.challenges.security.completed) {
        sliders.forEach(sld => { sld.disabled = true; });
        checkButton = document.getElementById('system-security-check-btn');
        checkButton.disabled = true;
        checkButton.classList.add('correct');
    }
}