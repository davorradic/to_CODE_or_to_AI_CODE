# Research Methodology

<div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
  <iframe
    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
    src="https://www.youtube.com/embed/zgKm2DbeEz4"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen>
  </iframe>
</div>

💬 **[Join the discussion on LinkedIn](https://www.linkedin.com/posts/davoronline_aiineducation-futureofwork-edtech-activity-7380578375054172160-bkkH?utm_source=share&utm_medium=member_desktop)** - Share your thoughts and help shape this research!

<a href="https://www.linkedin.com/feed/update/urn:li:ugcPost:7380578228303761408?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7380578228303761408%2C7380603947407028225%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287380603947407028225%2Curn%3Ali%3AugcPost%3A7380578228303761408%29" target="_blank" rel="noopener noreferrer">
  <img src="/comment_on_linkedin.jpg" alt="Join the LinkedIn discussion - See Pascal Mariany's comment" style={{maxWidth: '100%', height: 'auto', marginTop: '1rem', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', cursor: 'pointer'}} />
</a>

---

## 🎯 Simple Approach

**1-hour hackathon** → **Screen recording** → **AI analysis** → **Learn best workflows together**

### What We Want to Know
- How do people use AI in their coding workflow?
- What makes a good AI-assisted programming workflow?
- When should you use AI vs code manually?

## 📊 What Data We Collect

From 1-hour screen recordings, we automatically extract:

### Activity Tracking
- Which applications you use (VS Code, ChatGPT, browser, etc.)
- How much time in each application
- When you switch between tools

### Coding Patterns
- When you type code manually vs use AI
- How you use AI prompts
- Copy-paste behavior from AI to your code
- Problem-solving approaches

### Example Data Points
**Typical 1-hour session:**
- 45% time in IDE coding
- 20% using AI tools (ChatGPT, Copilot)
- 15% reading documentation
- 20% debugging and testing

**What makes a good workflow:**
- Strategic AI use for repetitive tasks
- Manual coding for core logic
- Quick problem-solving with AI assistance
- Code review of AI suggestions

## 🛠️ Technical Implementation

### Tools & Libraries We Use

**Video Processing:**
```bash
# Open source (free)
pip install opencv-python
pip install pytesseract
pip install numpy
pip install pillow
```

**AI Analysis Options:**

#### Option 1: Free (Tesseract OCR)
- 85-90% accuracy
- Runs on your computer
- Completely free
- Good for learning and testing

#### Option 2: Paid (Azure AI Vision)
- 95%+ accuracy
- Cloud-based processing
- ~$1-3 per 1000 recordings
- Professional quality

### How It Works

**Step 1: Record**
- Use OBS Studio or similar
- Record 1-hour coding session
- Upload video file

**Step 2: AI Processes Video**
```python
# Extract frames every 30 seconds
video = cv2.VideoCapture("recording.mp4")
# Use OCR to read screen text
text = pytesseract.image_to_string(frame)
# Detect applications, code, AI usage
```

**Step 3: Generate Insights**
- Which apps you used when
- Manual typing vs AI-generated code
- Time spent on different activities
- Your workflow pattern

## 🔬 Scientific Approach

### Research Quality Standards

**Mixed-Methods Research Design:**
- **Quantitative**: Time-based metrics, application usage statistics, code quality measures
- **Qualitative**: Workflow patterns, decision-making processes, problem-solving strategies
- **Validity**: Cross-validation with manual verification on 10% sample

**Data Quality Measures:**
- **Reliability**: Consistent OCR accuracy validation (90%+ threshold)
- **Reproducibility**: Documented methodology with open-source code
- **Statistical Significance**: Minimum sample size calculations for generalizable results
- **Ethics Compliance**: IRB approval, GDPR compliance, participant consent

**Measurement Validation:**
- **Inter-rater Reliability**: Multiple reviewers validate automated analysis
- **Ground Truth Comparison**: Self-reported data vs automated detection
- **Temporal Consistency**: Logical workflow progression verification
- **Outlier Detection**: Statistical methods to identify and handle anomalies

### Scientific Metrics We Measure

**Behavioral Metrics (Objective):**
- Application usage time (seconds, milliseconds precision)
- Keystroke timing patterns (natural typing vs paste events)
- Window switching frequency (context switches per minute)
- Code complexity scores (cyclomatic complexity, maintainability index)

**Performance Metrics (Quantitative):**
- Task completion rate (percentage of features implemented)
- Error density (bugs per 100 lines of code)
- Code quality scores (automated linting, best practices)
- Problem-solving speed (time to resolution for specific tasks)

**Cognitive Load Indicators (Derived):**
- Pause duration analysis (thinking time vs action time)
- Tool-seeking behavior frequency (help-seeking patterns)
- Trial-and-error iterations (attempt count before success)
- Documentation consultation depth (time spent reading docs)

## 📅 Research Timeline

### Simple 1-Hour Process

**Data Collection**:
- Students participate in 1-hour hackathon coding session
- Screen recordings automatically captured during session
- Students upload their video recordings to platform

**Automated Analysis**:
- AI computer vision processes all video recordings
- Automated extraction of:
  - Code workflow patterns
  - AI tool usage metrics
  - Typing vs AI-generated code patterns
  - Application switching behavior
  - Problem-solving approaches
  - Time allocation across different activities

**Quality Assurance**:
- 10% sample manually validated for accuracy
- Statistical analysis for significance testing
- Peer review of methodology and findings
- Reproducible research practices with published code

**No Manual Processing Required** - All data analysis is automated using AI-powered video analysis

---

## 🎬 Video Analysis Pipeline for Hackathon Code Flow Research

### 🎯 Project Goal
Analyze screen recordings of programming sessions to understand optimal AI tool usage patterns and code flow in hackathon environments. Extract data to identify where developers achieve best results.

### 🎬 Pilot Study Scope
- **20 videos** × **30 minutes** each
- **1 second frame extraction** (1,800 frames per video)
- **Free solution**: Tesseract OCR (no Azure costs)
- **Total frames**: 36,000
- **Storage**: ~18 GB
- **Processing time**: 20-30 hours

### 🔧 Technology Stack
- **FFmpeg/OpenCV**: Video frame extraction
- **Tesseract OCR**: Text recognition from screens
- **Python**: Processing pipeline
- **OpenCV + PIL/Pillow**: Image preprocessing
- **Pandas**: Data analysis
- **JSON/CSV**: Data storage

### 📁 Project Structure
```
project/
├── raw_videos/              # Input: MP4/AVI video files
├── data/                    # Processed data per video
│   ├── video_01/
│   │   ├── frames/          # 1,800 raw frames (PNG/JPG)
│   │   ├── processed/       # Enhanced frames for OCR
│   │   ├── ocr_output/      # Text extraction results
│   │   ├── timeline.json    # Structured timeline data
│   │   └── metrics.json     # Calculated metrics
├── scripts/                 # Processing pipeline
│   ├── 1_extract_frames.py
│   ├── 2_preprocess.py
│   ├── 3_detect_regions.py
│   ├── 4_run_ocr.py
│   ├── 5_classify_activity.py
│   ├── 6_structure_data.py
│   └── 7_calculate_metrics.py
├── analysis/                # Cross-video analysis
├── results/                 # Final outputs
└── requirements.txt
```

### 🚀 Pipeline Overview

**Step 1: Frame Extraction**
- Extract 1 frame per second using FFmpeg/OpenCV
- Output: 1,800 PNG images with timestamp naming

**Step 2: Image Preprocessing**
- Grayscale conversion, contrast enhancement, denoising
- Output: Enhanced frames optimized for OCR

**Step 3: Screen Region Detection**
- Identify IDE, browser, terminal zones using template matching
- Output: Bounding box coordinates for each region

**Step 4: OCR Text Extraction**
- Run Tesseract OCR on each region with programming-specific config
- Output: Extracted text per region with confidence scores

**Step 5: Activity Classification**
- Detect active window, typing vs paste, AI tool usage
- Output: Activity labels and metrics per frame

**Step 6: Data Structuring**
- Build timeline, identify activity segments
- Output: Structured JSON with timeline and segments

**Step 7: Metrics Calculation**
- Calculate time allocation, AI usage metrics, coding metrics
- Output: Summary metrics (CSV/JSON)

**Step 8: Cross-Video Analysis**
- Compare participants, find success patterns
- Output: Research insights, visualizations, recommendations

### 📋 Key Data Points Extracted

**Per Frame (1 second intervals):**
```json
{
  "frame": 450,
  "timestamp": "00:07:30",
  "active_window": "vscode",
  "activity": "typing",
  "typing_speed": 45,
  "ai_tool_visible": false,
  "language": "python",
  "error_present": false,
  "confidence": 0.87
}
```

**Per Video Summary:**
- Duration (seconds)
- IDE time percentage
- AI tool time percentage
- Number of AI interactions
- Context switch frequency
- Average typing speed
- Error count
- Manual vs AI-generated code ratio

### 🎯 Success Patterns to Identify

1. **Optimal AI Usage**: 25-35% of time shows best results
2. **Strategic AI Use**: AI for boilerplate, manual for core logic
3. **Code Review Behavior**: Participants who review/modify AI suggestions perform better
4. **Learning Transfer**: Applying AI-learned patterns manually in new contexts
5. **Balanced Workflow**: Mix of AI assistance and independent problem-solving

### 🔍 OCR Configuration

**Tesseract Settings for Code:**
```python
tesseract_config = '--oem 3 --psm 6 -c tessedit_char_whitelist=0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,;:(){}[]<>=+-*/\'"_@#$%^&|\\~`?! \t\n'
```

**Preprocessing for Better OCR:**
- Grayscale conversion
- Binary thresholding
- Gaussian blur for noise reduction
- Image scaling (1.5-2x) for small text
- Contrast adjustment

### 📊 Expected Results

**Processing Time:**
- Per video: 60-90 minutes
- All 20 videos: 20-30 hours
- Can parallelize: 5 videos simultaneously on multi-core CPU

**Storage Requirements:**
- Raw frames: ~15 GB
- Processed frames: ~3 GB
- OCR output: ~500 MB
- Total: ~18 GB

**Accuracy Expectations:**
- Tesseract OCR: 85-90% accuracy with preprocessing
- Activity classification: Manual validation on 10% sample
- Metrics reliability: Cross-reference with self-reported data

### 🚦 Getting Started

**Prerequisites:**
```bash
# Install Tesseract OCR
sudo apt-get install tesseract-ocr  # Linux
brew install tesseract              # macOS

# Install FFmpeg (optional)
sudo apt-get install ffmpeg         # Linux
brew install ffmpeg                 # macOS

# Python packages
pip install -r requirements.txt
```

**Quick Start:**
1. Place videos in `raw_videos/`
2. Run extraction: `python scripts/1_extract_frames.py`
3. Preprocess: `python scripts/2_preprocess.py`
4. Run OCR: `python scripts/4_run_ocr.py`
5. Analyze: `python scripts/7_calculate_metrics.py`

### 🎓 Research Questions Answered

1. **How much AI usage is optimal?** → Time allocation metrics
2. **When should developers use AI vs manual coding?** → Activity pattern analysis
3. **What workflows produce best code quality?** → Correlation analysis
4. **How do experience levels differ in AI usage?** → Cross-participant comparison
5. **What are signs of AI dependency vs collaboration?** → Behavioral pattern detection

### 💡 Key Insights from Methodology

- **Mixed approach wins**: Neither pure AI nor pure manual coding produces best results
- **Code review matters**: Students who critically evaluate AI suggestions learn better
- **Context matters**: Different tasks require different AI usage levels
- **Learning transfer**: Best outcomes when students apply AI-learned patterns independently

---

## 📞 Contact Research Team
- **Principal Investigator**: d.radic@roc-nijmegen.nl
- **Direct Line**: +31 6 14454426

---

*Learn together how AI changes programming workflows* 🔬
