// ============================================
// FUTURISTIC PERSONALITY QUIZ - MAIN SCRIPT
// ============================================

// Quiz data - questions and possible results
const quizData = {
    questions: [{
            id: 1,
            text: "When faced with a complex problem, your first instinct is to:",
            options: [
                { id: 'a', text: "Analyze all available data systematically", type: 'analyst' },
                { id: 'b', text: "Trust your gut feeling and intuition", type: 'intuitive' },
                { id: 'c', text: "Collaborate with others to find solutions", type: 'collaborator' },
                { id: 'd', text: "Imagine a creative, out-of-the-box solution", type: 'visionary' }
            ]
        },
        {
            id: 2,
            text: "Your ideal environment for deep work is:",
            options: [
                { id: 'a', text: "A quiet, organized space with minimal distractions", type: 'analyst' },
                { id: 'b', text: "A dynamic space that stimulates your senses", type: 'intuitive' },
                { id: 'c', text: "A collaborative hub with like-minded people", type: 'collaborator' },
                { id: 'd', text: "An inspiring, aesthetically pleasing location", type: 'visionary' }
            ]
        },
        {
            id: 3,
            text: "When making important decisions, you rely most on:",
            options: [
                { id: 'a', text: "Logic, facts, and proven methods", type: 'analyst' },
                { id: 'b', text: "Instincts and emotional intelligence", type: 'intuitive' },
                { id: 'c', text: "Advice and perspectives from trusted people", type: 'collaborator' },
                { id: 'd', text: "Future possibilities and imaginative scenarios", type: 'visionary' }
            ]
        },
        {
            id: 4,
            text: "Your approach to learning new things is:",
            options: [
                { id: 'a', text: "Structured, step-by-step mastery", type: 'analyst' },
                { id: 'b', text: "Experimental, learning by doing", type: 'intuitive' },
                { id: 'c', text: "Through discussion and shared experiences", type: 'collaborator' },
                { id: 'd', text: "Exploring connections between different fields", type: 'visionary' }
            ]
        },
        {
            id: 5,
            text: "In a team setting, you naturally take on the role of:",
            options: [
                { id: 'a', text: "The strategist who plans every detail", type: 'analyst' },
                { id: 'b', text: "The empath who understands team dynamics", type: 'intuitive' },
                { id: 'c', text: "The connector who facilitates communication", type: 'collaborator' },
                { id: 'd', text: "The innovator who proposes bold ideas", type: 'visionary' }
            ]
        },
        {
            id: 6,
            text: "Your relationship with technology is best described as:",
            options: [
                { id: 'a', text: "Tool-oriented, using it to optimize efficiency", type: 'analyst' },
                { id: 'b', text: "Intuitive, adapting quickly to new interfaces", type: 'intuitive' },
                { id: 'c', text: "Social, using it to connect and collaborate", type: 'collaborator' },
                { id: 'd', text: "Creative, using it to express and invent", type: 'visionary' }
            ]
        },
        {
            id: 7,
            text: "When imagining the future, you focus on:",
            options: [
                { id: 'a', text: "Practical advancements that solve current problems", type: 'analyst' },
                { id: 'b', text: "Human connection and emotional wellbeing", type: 'intuitive' },
                { id: 'c', text: "Community and collective progress", type: 'collaborator' },
                { id: 'd', text: "Radical transformation and new possibilities", type: 'visionary' }
            ]
        }
    ],

    results: {
        analyst: {
            name: "THE ARCHITECT",
            code: "NEURAL-PATTERN-A7",
            description: "You possess a systematic mind that excels at deconstructing complexity into manageable components. Your strength lies in logical analysis, structured thinking, and creating efficient systems. You're the foundation upon which innovative ideas become reality.",
            traits: ["Analytical", "Precise", "Systematic", "Logical", "Detail-Oriented"],
            color: "#0066ff",
            stats: {
                intuition: 65,
                logic: 95,
                creativity: 70,
                empathy: 60
            },
            shape: "square"
        },
        intuitive: {
            name: "THE EMPATH",
            code: "NEURAL-PATTERN-B3",
            description: "You navigate the world through emotional intelligence and instinct. Your ability to read between the lines and understand unspoken dynamics makes you exceptionally perceptive. You connect dots others miss through subtle cues and gut feelings.",
            traits: ["Perceptive", "Adaptive", "Emotionally Intelligent", "Insightful", "Spontaneous"],
            color: "#ff00aa",
            stats: {
                intuition: 95,
                logic: 70,
                creativity: 80,
                empathy: 90
            },
            shape: "circle"
        },
        collaborator: {
            name: "THE SYNCHRONIZER",
            code: "NEURAL-PATTERN-C9",
            description: "You are the connective tissue of any group, facilitating harmony and collective intelligence. Your strength lies in understanding diverse perspectives and creating synergistic environments where the whole becomes greater than the sum of its parts.",
            traits: ["Diplomatic", "Connective", "Supportive", "Harmonious", "Communicative"],
            color: "#00cc66",
            stats: {
                intuition: 75,
                logic: 75,
                creativity: 65,
                empathy: 85
            },
            shape: "triangle"
        },
        visionary: {
            name: "THE FRONTIER EXPLORER",
            code: "NEURAL-PATTERN-D5",
            description: "You see patterns and possibilities where others see chaos or convention. Your mind naturally leaps to novel combinations and future scenarios. You're driven by the thrill of exploring uncharted cognitive territory and manifesting the unprecedented.",
            traits: ["Imaginative", "Innovative", "Boundary-Pushing", "Conceptual", "Future-Oriented"],
            color: "#ffaa00",
            stats: {
                intuition: 85,
                logic: 60,
                creativity: 95,
                empathy: 70
            },
            shape: "hexagon"
        }
    }
};

// DOM Elements
const welcomeScreen = document.getElementById('welcomeScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');
const startButton = document.getElementById('startButton');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const progressFill = document.getElementById('progressFill');
const progressValue = document.getElementById('progressValue');
const currentQuestion = document.getElementById('currentQuestion');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const personalityName = document.getElementById('personalityName');
const personalityCode = document.getElementById('personalityCode');
const personalityDescription = document.getElementById('personalityDescription');
const traitsContainer = document.getElementById('traitsContainer');
const personalityImage = document.getElementById('personalityImage');
const resultGlow = document.getElementById('resultGlow');
const retakeButton = document.getElementById('retakeButton');
const shareButton = document.getElementById('shareButton');
const statIntuition = document.getElementById('statIntuition');
const statLogic = document.getElementById('statLogic');
const statCreativity = document.getElementById('statCreativity');
const statEmpathy = document.getElementById('statEmpathy');

// Quiz State
let currentQuestionIndex = 0;
let userAnswers = [];
let userPersonalityScores = {
    analyst: 0,
    intuitive: 0,
    collaborator: 0,
    visionary: 0
};

// Initialize particles in background
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random properties
        const size = Math.random() * 4 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.5 + 0.1;

        // Set styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.backgroundColor = `rgba(0, 200, 255, ${opacity})`;
        particle.style.boxShadow = `0 0 ${size * 2}px rgba(0, 200, 255, ${opacity})`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;

        particlesContainer.appendChild(particle);
    }

    // Add CSS for particles
    const style = document.createElement('style');
    style.textContent = `
        .particle {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            animation: floatParticle linear infinite;
        }
        
        @keyframes floatParticle {
            0% {
                transform: translate(0, 0) rotate(0deg);
                opacity: 0.5;
            }
            25% {
                transform: translate(20px, -20px) rotate(90deg);
                opacity: 0.8;
            }
            50% {
                transform: translate(0, -40px) rotate(180deg);
                opacity: 1;
            }
            75% {
                transform: translate(-20px, -20px) rotate(270deg);
                opacity: 0.8;
            }
            100% {
                transform: translate(0, 0) rotate(360deg);
                opacity: 0.5;
            }
        }
    `;
    document.head.appendChild(style);
}

// Play sound effect
function playSound() {
    const audio = document.getElementById('clickSound');
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(e => console.log("Audio play failed:", e));
    }
}

// Show screen with animation
function showScreen(screenToShow) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
        screen.style.opacity = '0';
        screen.style.transform = 'translateY(20px)';
    });

    // Show the selected screen with animation
    setTimeout(() => {
        screenToShow.classList.add('active');
        screenToShow.style.opacity = '1';
        screenToShow.style.transform = 'translateY(0)';
    }, 50);
}

// Start the quiz
function startQuiz() {
    playSound();
    userAnswers = [];
    currentQuestionIndex = 0;
    userPersonalityScores = {
        analyst: 0,
        intuitive: 0,
        collaborator: 0,
        visionary: 0
    };

    showScreen(quizScreen);
    loadQuestion();
    updateProgress();
}

// Load current question
function loadQuestion() {
    const question = quizData.questions[currentQuestionIndex];

    // Update question text with typing animation
    questionText.style.opacity = '0';
    questionText.style.transform = 'translateY(10px)';

    setTimeout(() => {
        questionText.textContent = question.text;
        questionText.style.opacity = '1';
        questionText.style.transform = 'translateY(0)';

        // Add letter-by-letter animation
        const text = questionText.textContent;
        questionText.textContent = '';
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                questionText.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 20);
    }, 300);

    // Update question number
    currentQuestion.textContent = currentQuestionIndex + 1;

    // Clear previous options
    optionsContainer.innerHTML = '';

    // Create new options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (userAnswers[currentQuestionIndex] === option.id) {
            optionElement.classList.add('selected');
        }

        optionElement.innerHTML = `
            <span class="option-index">${option.id}</span>
            <span class="option-text">${option.text}</span>
        `;

        optionElement.addEventListener('click', () => selectOption(option.id, option.type, optionElement));

        // Add staggered animation
        optionElement.style.opacity = '0';
        optionElement.style.transform = 'translateY(20px)';

        setTimeout(() => {
            optionElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            optionElement.style.opacity = '1';
            optionElement.style.transform = 'translateY(0)';
        }, index * 100);

        optionsContainer.appendChild(optionElement);
    });

    // Update navigation buttons
    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.textContent = currentQuestionIndex === quizData.questions.length - 1 ? 'SEE RESULTS' : 'NEXT';
}

// Select an option
function selectOption(optionId, personalityType, element) {
    playSound();

    // Remove selected class from all options
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(opt => opt.classList.remove('selected'));

    // Add selected class to clicked option
    element.classList.add('selected');

    // Store answer
    userAnswers[currentQuestionIndex] = optionId;

    // Add to personality scores
    userPersonalityScores[personalityType]++;

    // Enable next button
    nextButton.disabled = false;

    // Add selection animation
    element.style.animation = 'none';
    setTimeout(() => {
        element.style.animation = 'pulse 0.5s';
    }, 10);
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / quizData.questions.length) * 100;

    // Animate progress fill
    progressFill.style.width = `${progress}%`;
    progressValue.textContent = `${Math.round(progress)}%`;

    // Add completion animation when at 100%
    if (progress === 100) {
        progressFill.style.animation = 'completePulse 1s infinite';

        // Add CSS for completion animation
        const style = document.createElement('style');
        if (!document.querySelector('#completePulseStyle')) {
            style.id = 'completePulseStyle';
            style.textContent = `
                @keyframes completePulse {
                    0%, 100% { box-shadow: 0 0 5px #00ff00; }
                    50% { box-shadow: 0 0 20px #00ff00; }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Navigate to next question
function goToNextQuestion() {
    if (!userAnswers[currentQuestionIndex]) {
        // If no answer selected, show alert
        alert("Please select an answer before proceeding.");
        return;
    }

    playSound();

    if (currentQuestionIndex < quizData.questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        updateProgress();
    } else {
        // Quiz completed, show results
        calculateResult();
        showScreen(resultScreen);
        displayResult();
    }
}

// Navigate to previous question
function goToPreviousQuestion() {
    playSound();

    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
        updateProgress();
    }
}

// Calculate final personality result
function calculateResult() {
    // Find the personality type with the highest score
    let maxScore = 0;
    let resultType = 'analyst'; // Default

    for (const type in userPersonalityScores) {
        if (userPersonalityScores[type] > maxScore) {
            maxScore = userPersonalityScores[type];
            resultType = type;
        }
    }

    return resultType;
}

// Display result with animations
function displayResult() {
    const resultType = calculateResult();
    const result = quizData.results[resultType];

    // Set personality info with animation
    personalityName.textContent = result.name;
    personalityCode.textContent = result.code;
    personalityDescription.textContent = result.description;

    // Set glow color
    resultGlow.style.background = `radial-gradient(circle, ${result.color}40, transparent 70%)`;

    // Create animated shape
    personalityImage.innerHTML = '';
    const shape = document.createElement('div');
    shape.className = 'shape';

    // Add shape-specific styling
    if (result.shape === 'square') {
        shape.style.borderRadius = '15px';
        shape.innerHTML = '<i class="fas fa-th-large"></i>';
    } else if (result.shape === 'circle') {
        shape.style.borderRadius = '50%';
        shape.innerHTML = '<i class="fas fa-circle"></i>';
    } else if (result.shape === 'triangle') {
        shape.style.borderRadius = '15px';
        shape.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
        shape.innerHTML = '<i class="fas fa-play"></i>';
    } else if (result.shape === 'hexagon') {
        shape.style.borderRadius = '15px';
        shape.style.clipPath = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';
        shape.innerHTML = '<i class="fas fa-bezier-curve"></i>';
    }

    shape.style.color = result.color;
    shape.style.fontSize = '4rem';

    // Add animation
    shape.style.animation = 'shapePulse 2s infinite alternate';

    // Add CSS for shape pulse
    const style = document.createElement('style');
    if (!document.querySelector('#shapePulseStyle')) {
        style.id = 'shapePulseStyle';
        style.textContent = `
            @keyframes shapePulse {
                0% { transform: scale(1); box-shadow: 0 0 10px ${result.color}; }
                100% { transform: scale(1.1); box-shadow: 0 0 30px ${result.color}; }
            }
        `;
        document.head.appendChild(style);
    }

    personalityImage.appendChild(shape);

    // Create traits
    traitsContainer.innerHTML = '';
    result.traits.forEach((trait, index) => {
        const traitElement = document.createElement('div');
        traitElement.className = 'trait';
        traitElement.textContent = trait;
        traitElement.style.borderColor = result.color;
        traitElement.style.color = result.color;

        // Staggered animation
        traitElement.style.opacity = '0';
        traitElement.style.transform = 'translateY(10px)';

        setTimeout(() => {
            traitElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            traitElement.style.opacity = '1';
            traitElement.style.transform = 'translateY(0)';
        }, index * 200);

        traitsContainer.appendChild(traitElement);
    });

    // Animate stats bars
    setTimeout(() => {
        statIntuition.style.width = `${result.stats.intuition}%`;
        statIntuition.style.background = `linear-gradient(90deg, ${result.color}, #ffaa00)`;

        statLogic.style.width = `${result.stats.logic}%`;
        statLogic.style.background = `linear-gradient(90deg, ${result.color}, #00aaff)`;

        statCreativity.style.width = `${result.stats.creativity}%`;
        statCreativity.style.background = `linear-gradient(90deg, ${result.color}, #ff00ff)`;

        statEmpathy.style.width = `${result.stats.empathy}%`;
        statEmpathy.style.background = `linear-gradient(90deg, ${result.color}, #00ffaa)`;
    }, 500);

    // Add celebration particles
    createCelebrationParticles(result.color);
}

// Create celebration particles for result reveal
function createCelebrationParticles(color) {
    const container = document.querySelector('.result-content');

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'celebration-particle';

        // Random properties
        const size = Math.random() * 6 + 2;
        const posX = Math.random() * 100;
        const duration = Math.random() * 1 + 0.5;
        const delay = Math.random() * 0.5;

        // Set styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 ${size * 3}px ${color}`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;

        container.appendChild(particle);
    }

    // Add CSS for celebration particles
    const style = document.createElement('style');
    if (!document.querySelector('#celebrationParticlesStyle')) {
        style.id = 'celebrationParticlesStyle';
        style.textContent = `
            .celebration-particle {
                position: absolute;
                border-radius: 50%;
                pointer-events: none;
                bottom: 0;
                animation: celebrate linear forwards;
                z-index: 1;
            }
            
            @keyframes celebrate {
                0% {
                    transform: translateY(0) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) scale(0);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Remove particles after animation
    setTimeout(() => {
        const particles = document.querySelectorAll('.celebration-particle');
        particles.forEach(particle => particle.remove());
    }, 1500);
}

// Retake quiz
function retakeQuiz() {
    playSound();
    showScreen(welcomeScreen);
}

// Share result (simulated)
function shareResult() {
    playSound();

    // Create a share message
    const resultType = calculateResult();
    const result = quizData.results[resultType];
    const shareMessage = `I just discovered my digital personality: ${result.name} - ${result.code}. Find yours at the Digital Personality Mirror!`;

    // Check if Web Share API is available
    if (navigator.share) {
        navigator.share({
                title: 'My Digital Personality',
                text: shareMessage,
                url: window.location.href
            })
            .catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareMessage)
            .then(() => {
                alert('Result copied to clipboard!');
            })
            .catch(err => {
                console.log('Error copying:', err);
                alert('Share this: ' + shareMessage);
            });
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles
    initParticles();

    // Set up event listeners
    startButton.addEventListener('click', startQuiz);
    nextButton.addEventListener('click', goToNextQuestion);
    prevButton.addEventListener('click', goToPreviousQuestion);
    retakeButton.addEventListener('click', retakeQuiz);
    shareButton.addEventListener('click', shareResult);

    // Disable next button initially (no option selected)
    nextButton.disabled = true;

    // Add hover sound effects to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            // Play a subtle sound on hover
            const audio = document.getElementById('clickSound');
            if (audio) {
                audio.currentTime = 0;
                audio.volume = 0.3;
                audio.play().catch(e => console.log("Hover sound failed"));
                audio.volume = 1;
            }
        });
    });

    // Initialize welcome screen
    showScreen(welcomeScreen);

    // Add typing effect to welcome description
    const description = document.querySelector('.description');
    const originalText = description.textContent;
    description.textContent = '';

    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < originalText.length) {
            description.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, 30);
});