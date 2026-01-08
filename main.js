// ========== status GLOBAL DEL JUEGO ==========
const gameState = {
    challenges: {
        access: { status: 'active', completed: false, solution: {code: "6015"}, answer: {code: ''}},
        electricity: { status: 'locked', completed: false, solution: {code: "333-L", param:"223"} },
        security: { status: 'locked', completed: false, solution: {code: "5427"}, answer: {code: ''} },
        bridge: { status: 'locked', completed: false, solution: { code:['00', '11', '22', '33', '44', '04', '13', '31', '40']}, answer: {code: []}},
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
                        <li><b>Cerca:</b> 20 kV</li>
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
                        <li><b>Cerca: </b> 5 kV</li>
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
                        <li><b>Cerca:</b> 15 kV</li>
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
                        <li><b>Cerca:</b> 30 kV</li>
                    </ul> 
                    <img src="images/brachiosaurus.jpg" alt="Brachiosaurus Altithorax">
                </div>
            `},

        { id: 4, title: "Manual de sistemas", show: false, read: false,
            text: `
                <div class="dinosaur-wiki">
                    <h4>Generadores Eéctricos</h4>
                    <p>En caso de caída del sistema de electricidad deberían arrancar los generadores eléctricos de forma automática. 
                    Si fallan, verificar su status.</p>
                    <br><p>Códigos de error:</p>
                    <ul>
                        <li>405-C: introduzca los siguientes parámetros:</li>
                            <ul>
                                <li>Presión: 300 PSI</li>
                                <li>Combustible: 200 L/h</li>
                                <li>Temperatura: 85 °C</li>
                            </ul>
                        <li>66-T: introduzca los siguientes parámetros:</li>
                            <ul>
                                <li>Presión: 120 PSI</li>
                                <li>Combustible: 500 L/h</li>
                                <li>Temperatura: 90 °C</li>
                            </ul>
                        <li>333-L: introduzca los siguientes parámetros:</li>
                            <ul>
                                <li>Presión: 120 PSI</li>
                                <li>Combustible: 380 L/h</li>
                                <li>Temperatura: 85 °C</li>
                            </ul>
                        <li>781-E: introduzca los siguientes parámetros:</li>
                            <ul>
                                <li>Presión: 50 PSI</li>
                                <li>Combustible: 500 L/h</li>
                                <li>Temperatura: 75 °C</li>
                            </ul>
                    </ul>
                    <br>
                    <h4>Cercas Eléctricas</h4>
                    <p>Las cercas de cada sector tienen distinto voltaje dependiendo de su dinosaurio:</p>
                    <ul>
                        <li>Sector A: Tyrannosaurus Rex</li>
                        <li>Sector B: Triceratops</li>
                        <li>Sector C: Velociraptor</li>
                        <li>Sector D: Brachiosaurus Altithorax</li>
                    </ul>
                </div>

            `},

        { id: 5, title: "✉ Felicitación navideña", show: false, read: false,
            text: `
                <p><i>johnhammond@jurassicpark.com</i></p><br>
                <p>Hola a todos:<br><br>
                Os felicito por el gran trabajo realizado en el parque este año. Seguid trabajando duro para que la próxima inauguración
                de Jurassic Park™ sea un éxito. ¡Os deseo feliz Navidad!<br><br>
                Un saludo,<br>
                John Hammond, presidente<br><br>
                P.d: Este año la cesta viene acompañada de un cheque regalo.</p>
        `},

        { id: 6, title: "✉ ¡¡¡Arrr!!!", show: false, read: false,
            text: `
                <p><i>johnhammond@jurassicpark.com</i></p><br>
                <p>¡Me encantan los piratas! Algún día quiero ser arqueólgo y buscar fósiles como si fuesen tesoros. 
                Es muy sencillo, solo tienes que cavar donde marca la "X".<br><br>
                Un saludo,<br>
                John Hammond, presidente<br><br>
                P.d: Soy Tim :), no le digas a Lex que te he escrito esto.</p>
        `}
    ],
    jeep: {
        sector: 0,
        route: [
            { id: 0, name: "Sector 0 - Indefinido", image: "map-visual-0.png", completed: true },
            { id: 1, name: "Sector 1 - Central Eléctrica", image: "map-visual-1.png", completed: false },
            { id: 2, name: "Sector 2 - Centro de Seguridad", image: "map-visual-2.png", completed: false },
            { id: 3, name: "Sector 2 - Centro de Seguridad", image: "map-visual-3.png", completed: false },
            { id: 4, name: "Sector 3 - Puente", image: "map-visual-4.png", completed: false },
            { id: 5, name: "Sector 4 - Helipuerto", image: "jeep-map-visual-5.png", completed: false }
        ],
        messages: {
            status: [
                "JEEP> Sector 0 - Indefinido: Sistemas caídos. Acceda a ellos para restaurarlos.",
                "JEEP> Sector 1 - Central Eléctrica: Sistema eléctrico caído. Activa los generadores de emergencia.",
                "JEEP> Sector 2 - Centro de Seguridad: Las cercas eléctricas están desactivadas. Debe reactivarlas",
                "JEEP> Sector 3 - Puente: El puente levadizo se ha quedado levantado. Bájalo desde el panel de control.",
                "JEEP> Sector 4 - Helipuerto: Llame a la torre de control para que envíen un helicóptero",
                "JEEP> ----"
            ],
            explore: [
                "JEEP> 'bbbssttzzbstbs'",
                "JEEP> 'Nos hemos acercado al panel de los generadores. Código de error visible: '333-L'. Necesita parámetros específicos.'",
                "JEEP> '¡Estamos rodeados de dinosaurios! ¡Dése prisa y active las cercas!'",
                "JEEP> 'El diseño del panel de control del puente lo sugirió el presidente. Ahora que lo pienso era un correo muy raro.'",
                "JEEP> '----",
                "JEEP> '----"
            ],
            move: [
                "Ya estamos en el punto de partida. Usa 'move' para avanzar al siguiente sector.",
                "Avanzando al Sector B - Triceratops...",
                "Avanzando al Sector C - Velociraptor (¡extrema precaución!)...",
                "Avanzando al Sector D - Brachiosaurus...",
                "Avanzando al Puente de Escape...",
                "¡Hemos llegado al punto final! El helicóptero puede aterrizar aquí."
            ],
            helicoptero: [
                "El helicóptero necesita una señal en código Morse y una confirmación en binario.",
                "Frecuencia de rescate: 121.5 MHz. Mensaje recibido: ... --- ... (SOS)",
                "Responder con: 'EN RUTA' en código binario (8-bits por carácter)."
            ]
        }
    },
    //currentChallenge: 0,
    currentSector: 0,
};

const tabContents = {
    comms: `
        <div class="terminal-container">
            <div class="terminal-header">
                <span class="terminal-title">Jurassic Park Control Console</span>
            </div>
            <div class="terminal-content">
                <div id="terminal-output" class="terminal-output">
                    <div class="terminal-line">Jurassic Park, Sistema de Comunicaciones v4.0.5</div>
                    <div class="terminal-line">Escriba "help" para ver los comandos disponibles.</div>
                    <div class="terminal-line error">SYSTEM > ¡TODOS LOS SISTEMAS CAÍDOS!</div>
                    <div class="terminal-line error">SYSTEM > Ruta del Jeep detenida.</div>
                    <div class="terminal-line prompt">> </div>
                </div>
                <div class="terminal-input">
                    <span class="prompt">> </span>
                    <input type="text" id="terminal-input" autocomplete="off" 
                        placeholder="Escribe un comando..." onkeypress="handleTerminalKey(event)">
                </div>
            </div>
            <div class="terminal-hint">
                <p>Escribe <strong>"help"</strong> para ver los comandos disponibles.</p>
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
        <div class="system-electricity-container">
            <h3>Sistema Eléctrico - Generadores</h3>
            <p>Ajustes del generador:</p>
            <div>
                <label for="code"><b>Código:</b></label>
                <input type="text" id="code" name="code" class="system-electricity-code">
            </div>
            <div class="electricity-options">
                <div class="option-title">Presión:</div>
                <div class="option-container">
                    <div class="option-item">
                        <input type="radio" id="pressure1" name="pressure" value="1">
                        <label for="pressure1">50 PSI</label>
                    </div>
                    <div class="option-item">
                        <input type="radio" id="pressure2" name="pressure" value="2">
                        <label for="pressure2">120 PSI</label>
                    </div>
                    <div class="option-item">
                        <input type="radio" id="pressure3" name="pressure" value="3">
                        <label for="pressure3">200 PSI</label>
                    </div>
                    <div class="option-item">
                        <input type="radio" id="pressure4" name="pressure" value="4">
                        <label for="pressure4">300 PSI</label>
                    </div>
                </div>
            </div>
            <div class="electricity-options">
                <div class="option-title">Combustible:</div>
                <div class="option-container">
                    <div class="option-item">
                        <input type="radio" id="fuel1" name="fuel" value="1">
                        <label for="fuel1">200 L/h</label>
                    </div>
                    <div class="option-item">
                        <input type="radio" id="fuel2" name="fuel" value="2">
                        <label for="fuel2">380 L/h</label>
                    </div>
                    <div class="option-item">
                        <input type="radio" id="fuel3" name="fuel" value="3">
                        <label for="fuel3">500 L/h</label>
                    </div>
                    <div class="option-item">
                        <input type="radio" id="fuel4" name="fuel" value="4">
                        <label for="fuel4">700 L/h</label>
                    </div>
                </div>
            </div>
            <div class="electricity-options">
                <div class="option-title">Temperatura:</div>
                <div class="option-container">
                    <div class="option-item">
                        <input type="radio" id="temp1" name="temp" value="1">
                        <label for="temp1">75 °C</label>
                    </div>
                    <div class="option-item">
                        <input type="radio" id="temp2" name="temp" value="2">
                        <label for="temp2">80 °C</label>
                    </div>
                    <div class="option-item">
                        <input type="radio" id="temp3" name="temp" value="3">
                        <label for="temp3">85 °C</label>
                    </div>
                    <div class="option-item">
                        <input type="radio" id="temp4" name="temp" value="4">
                        <label for="temp4">90 °C</label>
                    </div>
                </div>
            </div>
            <div>
                <button class="system-code-btn" onclick="backToSystem()">↲ ATRÁS</button>
                <button id="system-electricity-check-btn" class="system-code-btn" onclick="systemElectricityCheck()">⏻ ARRANCAR</button>
            </div>
        </div>        
    `,
    
    systemSecurity: `
        <div class="system-security-container">
            <h3>Sistema de Seguridad - Cercas Eléctricas</h3>
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
        <div class="system-bridge-container">
            <h3>Sistema del Puente</h3>
            <p>Marque el patrón:</p>
            <div class="bridge-button-grid" id="bridge-button-grid">
                <!-- Se genera dinámicamente -->
            </div>
            <div>
                <button class="system-code-btn" onclick="backToSystem()">↲ ATRÁS</button>
                <button id="system-bridge-check-btn" class="system-code-btn" onclick="systemBridgeCheck()">⏻ BAJAR</button>
            </div>
        </div>
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

            // if (gameState.challenges.bridge.completed) {
            //     bridgeImg.src = 'images/bridge-down.png';
            // } else {
            //     bridgeImg.src = 'images/bridge-up.png';
            // }
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
    if (gameState.challenges.security.completed) {
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

/* RETOS: marcar el reto recibido como completado
function challengeCompleted(challengeId) {
    if (!gameState.challenges[challengeId].completed) {
        gameState.challenges[challengeId].completed = true;
        gameState.currentChallenge = challengeId;
        
        //updateChecklist();
    }
}*/

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
}


// NAVEGACIÓN ENTRE SISTEMAS: abrir sistemas (delay intencional)
function openSystem(systemId) {
    const all = document.querySelectorAll('*');
    all.forEach(el => el.style.cursor = 'wait');
    
    setTimeout(() => {
        document.getElementById('tab-content').innerHTML = tabContents[systemId];
        all.forEach(el => el.style.cursor = '');
        if (systemId === 'systemElectricity' && gameState.challenges.electricity.completed) applyElectricityState();
        if (systemId === 'systemSecurity' && gameState.challenges.security.completed) applySecurityState();
        if (systemId === "systemBridge") showButtonGrid();
        if (systemId === 'systemBridge' && gameState.challenges.bridge.completed) applyBridgeState();
    }, 500);

    showSystemVisual(systemId);
}

// NAVEGACIÓN ENTRE SISTEMAS: volver al selector de sistemas
function backToSystem() {
    document.getElementById('tab-content').innerHTML = tabContents.systemUnlocked;
    showSystemVisual('systemDefault');
}

// RETO 2: reactivar el generador
function systemElectricityCheck() {
    const codeInput = document.querySelector('.system-electricity-code');
    const pressureRadios = document.querySelectorAll('input[name="pressure"]');
    const fuelRadios = document.querySelectorAll('input[name="fuel"]');
    const tempRadios = document.querySelectorAll('input[name="temp"]');
    
    // Obtener valores
    const code = codeInput.value.trim();
    const pressureValue = Array.from(pressureRadios).find(r => r.checked)?.value || "";
    const fuelValue = Array.from(fuelRadios).find(r => r.checked)?.value || "";
    const tempValue = Array.from(tempRadios).find(r => r.checked)?.value || "";

    const params = pressureValue + fuelValue + tempValue;

    gameState.challenges.electricity.answer = {
        code: code,
        param: params
    };

    const checkButton = document.getElementById('system-electricity-check-btn');
    
    if (code === gameState.challenges.electricity.solution.code && 
        params === gameState.challenges.electricity.solution.param) {
        
        gameState.challenges.electricity.completed = true;
        
        codeInput.disabled = true;
        pressureRadios.forEach(r => r.disabled = true);
        fuelRadios.forEach(r => r.disabled = true);
        tempRadios.forEach(r => r.disabled = true);
        
        updateElectricityVisual();
        
        checkButton.disabled = true;
        checkButton.classList.add('correct');
        
    } else {
        checkButton.classList.add('incorrect');
        setTimeout(() => { checkButton.classList.remove('incorrect'); }, 500);
    }
}

// RETO 2: conservar los valores los inputs, radio buttons deshabilitados y botón activar verde
function applyElectricityState() {
    const codeInput = document.querySelector('.system-electricity-code');
    const pressureRadios = document.querySelectorAll('input[name="pressure"]');
    const fuelRadios = document.querySelectorAll('input[name="fuel"]');
    const tempRadios = document.querySelectorAll('input[name="temp"]');
    const checkButton = document.getElementById('system-electricity-check-btn');
    
    codeInput.value = gameState.challenges.electricity.answer.code;

    const params = gameState.challenges.electricity.answer.param;
    
    for (let i = 0; i < params.length; i++) {
        const value = params[i];
        
        if (i === 0) {
            // params[0] -> presión
            for (const radio of pressureRadios) {
                if (radio.value === value) {
                    radio.checked = true;
                    break;
                }
            }
        } else if (i === 1) {
            // params[1] -> combustible
            for (const radio of fuelRadios) {
                if (radio.value === value) {
                    radio.checked = true;
                    break;
                }
            }
        } else if (i === 2) {
            // params[2] -> temperatura
            for (const radio of tempRadios) {
                if (radio.value === value) {
                    radio.checked = true;
                    break;
                }
            }
        }
    }

    if (gameState.challenges.electricity.completed) {
        codeInput.disabled = true;
        pressureRadios.forEach(radio => radio.disabled = true);
        fuelRadios.forEach(radio => radio.disabled = true);
        tempRadios.forEach(radio => radio.disabled = true);
        checkButton.disabled = true;
        checkButton.classList.add('correct');
    }
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
        gameState.documents.find(d => d.id === 6).show = true;

        // Desactivar los botones
        const sliders = document.querySelectorAll('.slider');
        sliders.forEach(sld => { sld.disabled = true; });

        updateSecurityVisual();

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

// RETO 4: grid de botones para marcar un patrón
function showButtonGrid() {
    const board = document.getElementById('bridge-button-grid');
    board.innerHTML = '';
    
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            const square = document.createElement('div');
            square.className = 'bridge-button-grid-square';
            
            // Coordenada
            const coord = "" + row + col;
            
            square.dataset.coord = coord;
            square.textContent = coord;
            
            square.addEventListener('click', () => {
                toggleChessSquare(square);
            });
            
            board.appendChild(square);
        }
    }
}

// RETO 4: botones (div)
function toggleChessSquare(square) {
    if (square.classList.contains('disabled')) return;

    const coord = square.dataset.coord;
    const index = gameState.challenges.bridge.answer.code.indexOf(coord);
    
    if (index === -1) {
        gameState.challenges.bridge.answer.code.push(coord);
        square.classList.add('selected');
    } else {
        gameState.challenges.bridge.answer.code.splice(index, 1);
        square.classList.remove('selected');
    }
}

// RETO 4
function systemBridgeCheck() {
    checkButton = document.getElementById('system-bridge-check-btn');

    const answerArray = gameState.challenges.bridge.answer.code;
    const solutionArray = gameState.challenges.bridge.solution.code;
    const isCorrect = answerArray.length === solutionArray.length &&
        answerArray.every(sq => solutionArray.includes(sq)) &&
        solutionArray.every(sq => answerArray.includes(sq));

    if (isCorrect) {
        gameState.challenges.bridge.completed = true;

        const buttons = document.querySelectorAll('.bridge-button-grid-square');
        buttons.forEach(btn => { btn.classList.add('disabled'); });

        updateBridgeVisual();

        checkButton.disabled = true;
        checkButton.classList.add('correct');
    } else {
        checkButton.classList.add('incorrect');
        setTimeout(() => { checkButton.classList.remove('incorrect'); }, 500);
    }
}

// RETO 4: conservar los valores del grid, botones deshabilitados y botón bajar verde
function applyBridgeState() {    
    const answerArray = gameState.challenges.bridge.answer.code;
    const buttons = document.querySelectorAll('.bridge-button-grid-square');
    
    buttons.forEach(sq => {
        const coord = sq.dataset.coord;
        if (answerArray.includes(coord)) sq.classList.add('selected');
    });
    
    if (gameState.challenges.bridge.completed) {
        buttons.forEach(sq => { sq.classList.add('disabled'); });
        
        const checkButton = document.getElementById('system-bridge-check-btn');
        checkButton.disabled = true;
        checkButton.classList.add('correct');
    }
}

// TERMINAL: tecla Enter
function handleTerminalKey(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('terminal-input');
        const command = input.value.trim().toLowerCase();
        input.value = '';
        
        if (command) {
            processCommand(command);
        }
    }
}

// TERMINAL: procesar comandos
function processCommand(command) {
    const output = document.getElementById('terminal-output');
    const jeep = gameState.jeep;
    const sector = gameState.currentSector;
    
    // Mostrar comando
    output.innerHTML += `<div class="terminal-line prompt">> ${command}</div>`;
    
    // Procesar comando
    let response = '';
    
    switch(command) {
        case 'help':
            response = `<div class="terminal-line" style="white-space: pre">
- <strong>echo [arg]</strong>           Enviar un mensaje
   <strong>jeep status</strong>            Estado actual del Jeep
   <strong>jeep explore</strong>           La gente del Jeep examina el área
   <strong>jeep hint</strong>              Pedir una pista a la gente del Jeep
- <strong>cd nextSector</strong>        El Jeep avanza al siguiente sector
- <strong>helicoptero</strong>          Comunicarse con rescate aéreo
- <strong>clear</strong>                Limpiar el terminal</div>`;
            break;
            
        case 'echo jeep status':
            response = getJeepResponse(sector, 'status');
            break;
            
        case 'echo jeep explore':
            response = getJeepResponse(sector, 'explore');
            break;
        
        case 'echo jeep hint':
            // Pistas adicionales según retos completados
            if (sector === 1 && !gameState.challenges.electricity.completed) {
                response += `<div class="terminal-line hint">Pista: Consulta el "Manual de sistemas" en Documentos para los parámetros del código 333-L</div>`;
            }
            if (sector === 2 && !gameState.challenges.security.completed) {
                response += `<div class="terminal-line hint">Pista: Cada sector necesita su voltaje específico. Consulta la guía paleontológica.</div>`;
            }
            if (sector === 3) {
                response += `<div class="terminal-line hint">Pista: El patrón en el suelo muestra coordenadas: 00, 11, 22, 33, 44...</div>`;
            }
            break;
            
        case 'move':
            if (sector < jeep.route.length - 1) {
                // Verificar si puede avanzar (retos previos completados)
                let canMove = true;
                let requirement = '';
                
                if (sector === 0 && !gameState.challenges.access.completed) {
                    canMove = false;
                    requirement = 'Necesitas acceder a los sistemas primero.';
                }
                if (sector === 1 && !gameState.challenges.electricity.completed) {
                    canMove = false;
                    requirement = 'El Jeep no tiene electricidad.';
                }
                if (sector === 2 && !gameState.challenges.security.completed) {
                    canMove = false;
                    requirement = 'El Jeep está rodeado de dinosaurios.';
                }
                if (sector === 4 && !gameState.challenges.bridge.completed) {
                    canMove = false;
                    requirement = 'El puente levadizo no está bajado.';
                }
                
                if (canMove) {
                    gameState.currentSector++;
                    response = `<div class="terminal-line">${jeep.messages.move[sector]}</div>`;
                    
                    showCommunicationVisual();
                    
                    document.getElementById('header-sector').textContent = 
                        `${jeep.route[gameState.currentSector].name}`;
                } else {
                    response = `<div class="terminal-line error">No puedes avanzar. ${requirement}</div>`;
                }
            } else {
                response = `<div class="terminal-line">Ya estás en el sector final. Usa 'helicoptero' para contactar rescate.</div>`;
            }
            break;
            
        case 'helicopter':
            if (gameState.challenges.bridge.completed) {
                response = `<div class="terminal-line">${jeep.messages.helicoptero[0]}</div>
                           <div class="terminal-line">${jeep.messages.helicoptero[1]}</div>
                           <div class="terminal-line">${jeep.messages.helicoptero[2]}</div>
                           <div class="terminal-line hint">(Usa la pestaña Comunicaciones para responder)</div>`;
            } else {
                response = `<div class="terminal-line error">El puente no está bajado. No hay lugar para que aterrice el helicóptero.</div>`;
            }
            break;
            
        case 'clear':
            output.innerHTML = `<div class="terminal-line">Jurassic Park, Sistema de Comunicaciones v4.0.5</div>
                               <div class="terminal-line">Escriba "help" para ver los comandos disponibles.</div>
                               <div class="terminal-line" id="jeep-connection">Conexión establecida con JEEP-01 en Sector ${gameState.currentSector + 1}</div>`;
            break;
            
        default:
            response = `<div class="terminal-line error">Comando no reconocido: "${command}"</div>
                       <div class="terminal-line">Escribe "ayuda" para ver comandos disponibles.</div>`;
    }
    
    output.innerHTML += response;
    output.innerHTML += `<div class="terminal-line prompt">> </div>`;
    scrollTerminal();
}

// Diferentes mensajes si el rato actual ha sido completado y no se ha movido
function getJeepResponse(sector, messageType) {
    const challenges = gameState.challenges;
    const messages = gameState.jeep.messages[messageType];
    
    const sectorChallenges = {
        0: { completed: challenges.access.completed, successMsg: 'Acceso a sistemas obtenido. Mueva el Jeep al siguiente sector.' },
        1: { completed: challenges.electricity.completed, successMsg: 'Electricidad restablecida. Mueva el Jeep al siguiente sector.' },
        2: { completed: challenges.security.completed, successMsg: 'Cercas reactivadas. Mueva el Jeep al siguiente sector.' },
        4: { completed: challenges.bridge.completed, successMsg: 'Puente bajado. Mueva el Jeep al siguiente sector.' }
    };
    
    if (sectorChallenges[sector] && sectorChallenges[sector].completed) {
        return `<div class="terminal-line success">${sectorChallenges[sector].successMsg}</div>`;
    }
    
    return `<div class="terminal-line">${messages[sector]}</div>`;
}

// TERMINAL: desplazar al final
function scrollTerminal() {
    const output = document.getElementById('terminal-output');
    output.scrollTop = output.scrollHeight;
}

// TERMINAL: limpiar
function clearTerminal() {
    const output = document.getElementById('terminal-output');
    output.innerHTML = `<div class="terminal-line">Jurassic Park, Sistema de Comunicaciones v4.0.5</div>
                       <div class="terminal-line">Escriba "help" para ver los comandos disponibles.</div>
                       <div class="terminal-line prompt">> </div>`;
}

// ACTUALIZAR VISUAL DEL JEEP
function showCommunicationVisual() {
    const jeepImg = document.querySelector('#visual-comms img');
    const sector = gameState.currentSector;
    
    jeepImg.src = `images/map-visual-${sector}.png`;
}