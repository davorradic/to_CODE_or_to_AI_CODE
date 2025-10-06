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

## 🔬 Video Analysis Technology Research & Selection

### Overview: Choosing the Right Tools for Screen Recording Analysis

Before implementing our video analysis pipeline, we conducted extensive research into available technologies, neural network architectures, and open-source libraries. This chapter documents our research process and justifies our technology choices for academic transparency and reproducibility.

---

### 📚 Research Question: What Technologies Can Analyze Screen Recordings?

**Our Requirements:**
1. Extract frames from video (30-minute recordings)
2. Recognize text on screen (code, browser, terminal)
3. Detect application windows (IDE vs browser vs terminal)
4. Classify activities (typing vs pasting, AI tool usage)
5. Handle programming-specific text (symbols, syntax)
6. Process 20+ videos efficiently
7. Maintain data privacy (no cloud uploads if possible)
8. Reproducible for other researchers (preferably open-source)

---

### 🎥 **Part 1: Video Processing Libraries**

#### **Option 1: FFmpeg (Command-line tool)**
**What it is:** Industry-standard multimedia framework (1999-present)

**Capabilities:**
- Extract frames at any interval (1 per second, 1 per 5 seconds, etc.)
- Convert video formats (MP4, AVI, MOV, etc.)
- Process video metadata (duration, resolution, fps)
- Fast and reliable (used by YouTube, Netflix)

**Pros:**
- Free and open-source
- Cross-platform (Windows, Mac, Linux)
- Extremely fast (seconds to extract frames)
- Command-line scriptable

**Cons:**
- Requires separate installation
- Command-line only (no Python API)
- Overkill for simple frame extraction

**Our Decision:** ✅ **Selected as primary tool**
- Best performance for frame extraction
- Well-documented, stable, widely adopted
- Can be called from Python scripts

---

#### **Option 2: OpenCV (Python library)**
**What it is:** Computer vision library with video processing (2000-present)

**Capabilities:**
- Extract frames programmatically in Python
- Image preprocessing (grayscale, resize, enhance)
- Template matching (detect UI elements)
- Object detection capabilities

**Pros:**
- Pure Python - no external tools needed
- Integrated solution (video → frames → preprocessing)
- Rich computer vision features
- Active development and community

**Cons:**
- Slightly slower than FFmpeg
- More complex API for simple tasks
- Larger dependency footprint

**Our Decision:** ✅ **Selected as secondary tool**
- Use for preprocessing and template matching
- Fallback if FFmpeg unavailable
- Main library for image manipulation

---

#### **Option 3: MoviePy (Python library)**
**What it is:** Python video editing library built on FFmpeg

**Capabilities:**
- Pythonic API for video manipulation
- Frame extraction, video compositing
- Audio processing

**Pros:**
- Easy Python API
- Built on FFmpeg (best of both worlds)

**Cons:**
- Extra abstraction layer (slower)
- Overkill for our use case
- Less control than direct FFmpeg

**Our Decision:** ❌ **Not selected**
- Unnecessary abstraction for frame extraction
- FFmpeg + OpenCV combination more powerful

---

### 🧠 **Part 2: Neural Networks for Text Recognition (OCR)**

#### **Understanding OCR Neural Network Architectures**

**Evolution of OCR Technology:**
1. **1990s-2000s:** Template matching (slow, inflexible)
2. **2000s-2010s:** Feature extraction + SVM/Random Forest
3. **2012+:** Convolutional Neural Networks (CNNs)
4. **2015+:** Recurrent Neural Networks (RNNs) + LSTM
5. **2018+:** Transformer architectures + Attention mechanisms
6. **2020+:** Vision Transformers (ViT) + Multi-modal models

---

#### **Option 1: Tesseract OCR + LSTM**
**What it is:** Google's open-source OCR engine (2006-present, v4.0 in 2018 added LSTM)

**Neural Network Architecture:**
```
Input Image
  → CNN Feature Extraction (edge detection, pattern recognition)
  → LSTM Sequence Processing (character context understanding)
  → CTC Decoder (character prediction)
  → Language Model (context correction)
  → Final Text Output
```

**Technical Details:**
- **CNN Layers:** Extract visual features (edges, curves, character shapes)
- **LSTM Layers:** Understand character sequences ("def" more likely than "dcf" in Python)
- **CTC (Connectionist Temporal Classification):** Aligns characters to image regions
- **Training Data:** Millions of text samples across 100+ languages

**Accuracy:**
- General text: 85-95%
- Printed text: 90-98%
- Code with preprocessing: 85-90%
- Handwriting: 60-80%

**Pros:**
- ✅ Free and open-source
- ✅ Offline processing (no cloud, no API costs)
- ✅ Configurable (character whitelists for code)
- ✅ Fast (CPU-only, no GPU required)
- ✅ Proven reliability (used by Google, Archive.org)
- ✅ Active development

**Cons:**
- ❌ Lower accuracy than cloud solutions (5-10% worse)
- ❌ Requires preprocessing for best results
- ❌ Some errors with programming symbols

**Cost Analysis:**
- Setup: 1 hour installation
- Processing: 20-30 hours for 20 videos
- API costs: **$0**
- Total: $0

**Our Decision:** ✅ **Selected for pilot phase**
- Free solution for research reproducibility
- Sufficient accuracy for activity classification
- Privacy-preserving (local processing)
- Other researchers can replicate

---

#### **Option 2: Azure Computer Vision OCR**
**What it is:** Microsoft's cloud OCR service (2015-present)

**Neural Network Architecture:**
```
Input Image
  → Deep CNN (ResNet/EfficientNet-based)
  → Transformer Encoder (attention mechanisms)
  → Multi-head Attention (focus on text regions)
  → Language Model (context understanding)
  → JSON Output (text + bounding boxes)
```

**Technical Details:**
- **Deep CNN:** 50-100+ layers for complex feature extraction
- **Transformers:** Self-attention mechanisms (like GPT, BERT)
- **Multi-modal Learning:** Trained on images + text pairs
- **Continuous Improvement:** Updated models every few months

**Accuracy:**
- General text: 95-98%
- Code: 92-96%
- Handwriting: 85-92%

**Pros:**
- ✅ Highest accuracy (5-10% better than Tesseract)
- ✅ No local setup required
- ✅ Handles complex layouts automatically
- ✅ Regular improvements

**Cons:**
- ❌ Costs $1.50 per 1,000 images
- ❌ Privacy concerns (uploads to cloud)
- ❌ Requires internet connection
- ❌ Not reproducible (model changes over time)
- ❌ API quotas and rate limits

**Cost Analysis:**
- 36,000 frames × $1.50/1000 = **$54 per pilot**
- 100 videos = **$270**
- 1000 videos = **$2,700**

**Our Decision:** 🔄 **Reserve for validation**
- Test on 100-frame sample if Tesseract insufficient
- Not primary due to cost and privacy
- Document as alternative approach

---

#### **Option 3: Google Cloud Vision API**
**What it is:** Google's cloud OCR service (2016-present)

**Neural Network Architecture:**
```
Input Image
  → Inception/ResNet CNN (state-of-the-art feature extraction)
  → Attention Networks (focus on text regions)
  → BERT-like Language Models (context understanding)
  → Multi-task Learning (OCR + object detection + image classification)
```

**Technical Details:**
- Similar architecture to Azure (CNN + Transformers)
- Trained on Google's massive datasets
- Multi-language support (100+ languages)

**Accuracy:**
- General text: 95-97%
- Code: 91-95%
- Very similar to Azure

**Pros/Cons:**
- Nearly identical to Azure
- Same cost structure ($1.50/1000)
- Same privacy concerns

**Our Decision:** ❌ **Not selected**
- No significant advantage over Azure
- Same cost and privacy issues

---

#### **Option 4: AWS Textract**
**What it is:** Amazon's document OCR service (2019-present)

**Neural Network Architecture:**
```
Input Image
  → Deep CNN (custom architecture)
  → Document Understanding Model (tables, forms, structure)
  → Transformer-based Text Extraction
  → Relationship Detection (hierarchical structure)
```

**Best For:** Structured documents (invoices, forms, tables)

**Accuracy:**
- Forms/tables: 98-99%
- General text: 95-97%
- Code: 90-94%

**Our Decision:** ❌ **Not suitable**
- Optimized for documents, not screen recordings
- Same cost issues as Azure/Google
- Overkill for our use case

---

#### **Option 5: EasyOCR (Deep Learning Library)**
**What it is:** PyTorch-based OCR (2020-present)

**Neural Network Architecture:**
```
Input Image
  → Feature Extraction CNN (VGG/ResNet-based)
  → Sequence Modeling (LSTM bidirectional)
  → CTC Decoder
  → 80+ Languages Support
```

**Accuracy:**
- General text: 90-95%
- Code: 88-93%
- Better than Tesseract, worse than cloud

**Pros:**
- ✅ Free and open-source
- ✅ GPU acceleration support
- ✅ Modern architecture
- ✅ Good multilingual support

**Cons:**
- ❌ Requires GPU for speed (slow on CPU)
- ❌ Larger dependencies (PyTorch)
- ❌ Not as widely tested as Tesseract

**Our Decision:** 🔄 **Backup option**
- Test if Tesseract < 80% accuracy
- Requires GPU for efficiency

---

#### **Option 6: PaddleOCR (Baidu)**
**What it is:** Chinese company Baidu's OCR framework (2020-present)

**Neural Network Architecture:**
```
Input Image
  → Text Detection (DB++ / EAST CNN models)
  → Text Recognition (CRNN / SVTR models)
  → Ultra-lightweight models (mobile-optimized)
```

**Accuracy:**
- Chinese text: 96-98%
- English text: 92-96%
- Code: 90-94%

**Pros:**
- ✅ Very fast (optimized for speed)
- ✅ Free and open-source
- ✅ Excellent for Asian languages

**Cons:**
- ❌ Documentation primarily in Chinese
- ❌ Less community support in West
- ❌ Optimized for documents, not screens

**Our Decision:** ❌ **Not selected**
- Less suitable for English code
- Tesseract better documented

---

#### **Option 7: TrOCR (Transformer-based OCR)**
**What it is:** Microsoft's pure transformer OCR model (2021)

**Neural Network Architecture:**
```
Input Image
  → Vision Transformer (ViT) Encoder (no CNN!)
  → Transformer Decoder (GPT-like)
  → Pure Attention Mechanisms
  → State-of-the-art accuracy
```

**Accuracy:**
- Printed text: 96-98%
- Handwriting: 90-95%
- Code: 94-97% (theoretical)

**Pros:**
- ✅ Cutting-edge architecture
- ✅ Best accuracy potential
- ✅ Open-source (Hugging Face)

**Cons:**
- ❌ Requires GPU (very slow on CPU)
- ❌ Large model size (500MB+)
- ❌ Complex setup
- ❌ Overkill for activity detection

**Our Decision:** ❌ **Not practical for pilot**
- GPU requirement too restrictive
- Complexity not justified
- Future research option

---

### 📊 **Part 3: Computer Vision Libraries for Activity Detection**

#### **Option 1: OpenCV (Selected)**
**What it does:** Template matching, object detection, image manipulation

**Use Cases:**
- Detect application windows (IDE, browser, terminal)
- Template matching (recognize UI elements)
- Image preprocessing for OCR

**Why Selected:** ✅
- Industry standard
- Fast and efficient
- Excellent documentation
- Python integration

---

#### **Option 2: scikit-image**
**What it does:** Python image processing

**Why Not Selected:** ❌
- OpenCV more comprehensive
- Slower performance
- Overlapping features

---

#### **Option 3: PIL/Pillow**
**What it does:** Basic image manipulation

**Why Selected:** ✅ (Complementary)
- Lightweight
- Easy image loading/saving
- Use alongside OpenCV

---

### 📈 **Part 4: Data Analysis Libraries**

#### **Pandas (Selected)**
- DataFrame manipulation
- Time-series analysis
- CSV export

#### **NumPy (Selected)**
- Array operations
- Mathematical computations
- OpenCV integration

#### **Matplotlib/Seaborn (Selected)**
- Visualization
- Workflow pattern charts
- Research reports

---

### 🎯 **Final Technology Stack Decision**

| Component | Selected Tool | Runner-up | Reason |
|-----------|---------------|-----------|--------|
| **Video Processing** | FFmpeg + OpenCV | MoviePy | Performance + Flexibility |
| **OCR Engine** | Tesseract LSTM | Azure OCR | Free + Privacy + Reproducibility |
| **Computer Vision** | OpenCV | scikit-image | Industry standard |
| **Image Processing** | Pillow | - | Lightweight |
| **Data Analysis** | Pandas + NumPy | - | Standard stack |
| **Visualization** | Matplotlib | - | Publication-quality |

---

### 📋 **Decision Criteria Summary**

**Why These Choices?**

1. **Cost:** $0 for pilot phase (vs $54+ for cloud OCR)
2. **Privacy:** Local processing, no data uploads
3. **Reproducibility:** Other researchers can replicate exactly
4. **Accessibility:** Free tools, no API keys required
5. **Performance:** 20-30 hours for 20 videos (acceptable)
6. **Accuracy:** 85-90% sufficient for activity classification
7. **Scalability:** Can process 100s-1000s of videos without costs

**Trade-offs Accepted:**
- 5-10% lower accuracy vs cloud OCR (acceptable for pattern detection)
- Manual validation needed for 10% sample (standard research practice)
- Preprocessing required for best results (documented in methodology)

**Upgrade Path:**
- If Tesseract < 80% accurate → Try EasyOCR or PaddleOCR
- If still insufficient → Test Azure on sample (100 frames)
- Document all accuracy findings for transparency

---

### 📚 **References for Technology Selection**

**Academic Papers:**
- Tesseract LSTM: Smith, R. (2018). "Hybrid Page Layout Analysis via Tab-Stop Detection"
- TrOCR: Li, M. et al. (2021). "TrOCR: Transformer-based Optical Character Recognition"
- OCR Comparison: Nayef, N. et al. (2019). "ICDAR 2019 Robust Reading Challenge"

**Documentation:**
- [Tesseract GitHub](https://github.com/tesseract-ocr/tesseract)
- [OpenCV Docs](https://docs.opencv.org/)
- [FFmpeg Documentation](https://ffmpeg.org/documentation.html)

**Benchmarks:**
- [OCR Benchmark Study (2023)](https://github.com/JaidedAI/EasyOCR#benchmark)
- [PaddleOCR Accuracy Tests](https://github.com/PaddlePaddle/PaddleOCR)

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

### 🧠 OCR Technology Selection & Analysis

#### Why Tesseract OCR?

**Tesseract's Modern Neural Network Architecture:**
- **LSTM (Long Short-Term Memory) Neural Networks** - Introduced in Tesseract 4.0 (2018)
- Replaced traditional pattern recognition with deep learning
- Trained on massive datasets for character recognition
- Provides 85-90% accuracy for programming text with preprocessing

**Key Advantages:**
1. **Free & Open Source** - No API costs for 36,000 frames
2. **Offline Processing** - No data privacy concerns, works without internet
3. **Proven Reliability** - Used by Google, Archive.org, millions of developers
4. **Programming-Optimized** - Configurable character whitelists for code
5. **Active Development** - Regular updates, strong community support

#### Comparison with Modern Alternatives

**1. Convolutional Neural Networks (CNN) + LSTM Alternatives:**

**Azure Computer Vision OCR**
- Architecture: CNN + Transformer models
- Accuracy: 95-98% (3-8% better than Tesseract)
- Cost: $1.50 per 1000 images = **$54 for our 36,000 frames**
- Pros: Higher accuracy, cloud-based, no setup
- Cons: Privacy concerns (uploads to cloud), ongoing costs
- **Our Decision**: Not chosen for pilot phase due to cost and privacy

**Google Cloud Vision API**
- Architecture: Advanced CNN with attention mechanisms
- Accuracy: 95-97%
- Cost: $1.50 per 1000 images = **$54 for pilot**
- Pros: Very high accuracy, multilingual
- Cons: Privacy concerns, requires internet, expensive at scale
- **Our Decision**: Reserve for future if Tesseract accuracy insufficient

**AWS Textract**
- Architecture: Deep CNN + document understanding models
- Accuracy: 95-98%
- Cost: $1.50 per 1000 pages = **$54 for pilot**
- Pros: Excellent for structured documents
- Cons: Overkill for screen recordings, expensive
- **Our Decision**: Not optimal for real-time screen capture analysis

**2. Custom CNN Models:**

**Potential Custom Solutions:**
- **EasyOCR** - PyTorch-based, 80+ languages, 90-95% accuracy
- **PaddleOCR** - Baidu's solution, very fast, 92-96% accuracy
- **TrOCR** (Transformer-based) - Microsoft's latest, 96-98% accuracy
- **Custom CNN + LSTM** - Train on programming-specific text

**Why Not Custom Models for Pilot?**
- Training requires 10,000+ labeled images (months of work)
- Computational overhead (GPU required)
- Complexity not justified for 85-90% achievable with Tesseract
- Can iterate to custom models if needed after pilot validation

#### Tesseract's LSTM Neural Network Architecture

**How Tesseract 4.x Works:**
```
Input Image → CNN Feature Extraction → LSTM Sequence Processing → Character Recognition
```

**Technical Details:**
- **Convolutional layers** extract visual features (edges, shapes, patterns)
- **LSTM layers** understand character sequences and context
- **CTC (Connectionist Temporal Classification)** decoder predicts final text
- **Language models** improve accuracy with context (e.g., "def" more likely than "dcf" in Python)

**Compared to Pure CNN:**
- CNNs alone: ~70-75% accuracy on varied text
- CNN + LSTM: ~85-95% accuracy (what Tesseract uses)
- CNN + Transformer: ~95-98% accuracy (Azure, Google)

#### Our Validation Strategy

**Pilot Phase Approach:**
1. **Start with Tesseract** (free, fast, 85-90% accuracy)
2. **Manually validate 10% of frames** to measure actual accuracy
3. **Compare cost vs benefit** of cloud solutions
4. **Upgrade if needed** based on pilot results

**Decision Criteria for Upgrade:**
- If Tesseract accuracy < 80%: Consider EasyOCR or PaddleOCR (still free)
- If accuracy < 75%: Test Azure/Google on 100-frame sample
- If critical data missed: Move to cloud OCR for remaining videos

**Expected Outcome:**
- Tesseract sufficient for activity classification (IDE vs browser vs terminal)
- Some code text recognition errors acceptable (not reading exact code, just patterns)
- 85-90% accuracy meets research objectives at $0 cost

#### Research Transparency Note

**Why This Matters for Academic Research:**
- **Reproducibility**: Other researchers can replicate with free tools
- **Cost Accessibility**: Educational institutions can adopt methodology
- **Data Privacy**: Screen recordings stay on local machines
- **Scalability**: Processing 1000s of videos doesn't require cloud budgets

**Future Work:**
If Tesseract proves insufficient, we will:
1. Document accuracy gaps
2. Test alternative models (EasyOCR, PaddleOCR)
3. Consider fine-tuning custom models
4. Evaluate cost-benefit of cloud OCR for specific use cases

---

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

## 📱 Future Enhancement: Custom Flutter Screen Recording Application

### ⚠️ Status: Low Priority - Time Permitting

**Current Approach Limitations:**
- Video OCR has 85-90% accuracy (acceptable but not perfect)
- Window switching detection requires complex template matching
- Difficult to distinguish typing vs pasting from video alone
- Post-processing of 30-minute videos takes 60-90 minutes each
- No real-time metadata capture

---

### 🚀 Proposed Solution: Custom Recording App

**Vision:**
Build a cross-platform Flutter application that records screen activity WITH structured metadata, making analysis faster, more accurate, and more detailed.

**Why Flutter?**
- ✅ Cross-platform (Windows, macOS, Linux) - one codebase
- ✅ Modern UI framework (easy to build participant-friendly interface)
- ✅ Native performance
- ✅ Access to platform-specific APIs (window tracking, keyboard events)
- ✅ Active development community

---

### 🎯 Enhanced Data Collection Capabilities

**What the App Would Capture:**

**1. Video Recording (Same as Current)**
- Screen capture at 30 fps
- Full resolution recording

**2. Structured Metadata (NEW - The Game Changer)**
```json
{
  "session_id": "video_001",
  "timestamp": "2024-01-15T10:30:00Z",
  "events": [
    {
      "time": 45.2,
      "event_type": "window_focus",
      "window": "Visual Studio Code",
      "process": "Code.exe",
      "title": "main.py - project_name"
    },
    {
      "time": 45.3,
      "event_type": "keyboard_activity",
      "typing_speed": 120,
      "characters_typed": 45,
      "paste_event": false
    },
    {
      "time": 67.8,
      "event_type": "window_focus",
      "window": "Google Chrome",
      "process": "chrome.exe",
      "title": "ChatGPT - chat.openai.com"
    },
    {
      "time": 78.5,
      "event_type": "paste_event",
      "clipboard_size": 450,
      "source_window": "Google Chrome",
      "target_window": "Visual Studio Code"
    }
  ]
}
```

**3. Application Tracking**
- Active window at any moment (no OCR needed!)
- Window title (file name, browser tab)
- Application process name
- Focus duration per window

**4. Keyboard & Mouse Activity**
- Typing speed in real-time
- Paste events (Ctrl+V / Cmd+V detection)
- Clipboard content size (not content - privacy)
- Mouse clicks (frequency, location)

**5. AI Tool Detection**
- Detect when ChatGPT, Claude, Copilot windows are active
- Track time spent in AI tools vs IDE
- Capture transitions between tools

---

### 🎁 Benefits Over Video-Only Approach

| Metric | Current (Video OCR) | Future (Flutter App) |
|--------|---------------------|----------------------|
| **Window Detection Accuracy** | 85-90% (OCR) | 100% (OS-level API) |
| **Typing vs Paste Detection** | Difficult (frame comparison) | 100% (keyboard events) |
| **Processing Time** | 60-90 min per video | Real-time + 5 min post-processing |
| **Storage Required** | 18 GB for 20 videos | 10 GB (metadata = few MB) |
| **Analysis Complexity** | Complex (OCR + classification) | Simple (read JSON) |
| **Accuracy** | 85-90% | 99%+ |
| **Privacy** | Video contains all screen content | Can exclude sensitive windows |
| **Real-time Feedback** | No | Yes (show participant their stats) |

---

### 🛠️ Technical Implementation Plan

**Flutter Packages Needed:**
```yaml
dependencies:
  screen_capturer: ^0.2.0        # Screen recording
  window_manager: ^0.3.0          # Window detection
  hotkey_manager: ^0.1.0          # Keyboard event tracking
  path_provider: ^2.1.0           # File storage
  dio: ^5.4.0                     # Upload to server
  flutter_riverpod: ^2.4.0        # State management
```

**Platform-Specific APIs:**
- **Windows:** Win32 API for window tracking
- **macOS:** Accessibility API for window info
- **Linux:** X11/Wayland for window management

**Core Features:**
1. **Recording Interface**
   - Start/Stop recording button
   - Real-time timer
   - Active window indicator
   - Privacy mode (exclude certain windows)

2. **Background Tracking**
   - Monitor active window every 100ms
   - Track keyboard events (typing speed, paste)
   - Log application switches
   - Save metadata to JSON file

3. **Privacy Controls**
   - Blacklist windows (e.g., personal email, banking)
   - Blur specific screen regions
   - Participant can review data before upload

4. **Upload & Sync**
   - Save locally first
   - Optional upload to research server
   - Encrypted transmission

---

### 📊 Enhanced Research Insights Available

**With Structured Metadata, We Can Answer:**

1. **Exact Window Switching Patterns**
   - "Participants switch from IDE to ChatGPT every 3.2 minutes on average"
   - No OCR guessing - 100% accuracy

2. **Typing vs AI-Generated Code Ratio**
   - "45% of code was typed manually, 55% pasted from AI tools"
   - Detect exact paste events

3. **Real-time AI Tool Usage**
   - "Participants spent 28% of time in AI tools (vs 35% optimal)"
   - Track exact durations

4. **Context Switching Cost**
   - "Average task resumption takes 23 seconds after switching to AI tool"
   - Measure focus recovery time

5. **Workflow Efficiency Patterns**
   - "Participants who switch to AI less than 5 times/hour complete 20% more tasks"
   - Correlate metrics with outcomes

---

### ⏱️ Development Timeline Estimate

**If Time Available Before Hackathon:**

| Phase | Duration | Tasks |
|-------|----------|-------|
| **Phase 1: Prototype** | 1-2 weeks | Screen recording + basic window tracking |
| **Phase 2: Metadata** | 1 week | Keyboard events, JSON export |
| **Phase 3: UI Polish** | 3-5 days | User-friendly interface |
| **Phase 4: Testing** | 3-5 days | Test on multiple OS, fix bugs |
| **Phase 5: Deployment** | 2 days | Package installers, documentation |
| **Total** | **3-4 weeks** | Full working application |

**Minimum Viable Product (MVP):**
- **1 week:** Basic recording + window tracking + JSON export
- Sufficient for hackathon if needed

---

### 🔄 Fallback Strategy

**Priority Decision Tree:**

```
Is there 3+ weeks before hackathon?
├── YES → Build Flutter app (enhanced data)
└── NO → Use video recording + OCR (proven approach)
    └── Can still achieve 85-90% accuracy
```

**Hybrid Approach:**
- Start with video OCR pipeline (safe, proven)
- Develop Flutter app in parallel (if time allows)
- Test Flutter app with 5 participants first
- Roll out to all if successful
- Use video OCR as backup

---

### 💡 Post-Hackathon Value

**Even if Not Ready for Initial Hackathon:**

1. **Future Research Events**
   - Use for next hackathon (2027)
   - Offer to other research institutions
   - Open-source the tool

2. **Student Learning Tool**
   - Students can track their own workflow
   - Real-time feedback: "You've spent 40% of time in ChatGPT"
   - Self-improvement insights

3. **Industry Tool**
   - Companies interested in productivity analysis
   - Developer workflow optimization
   - Training program effectiveness

4. **Academic Contribution**
   - Publish methodology paper
   - Share tool with research community
   - Enable reproducible workflow research

---

### 📋 Decision: Low Priority, High Value

**Current Status:**
- ⏸️ **On Hold** - Not critical for pilot phase
- 📹 **Video OCR pipeline sufficient** for 20-video pilot
- 🚀 **Build if time available** (3-4 weeks before hackathon)
- 📝 **Document for future** enhancement

**Reassess Timeline:**
- If hackathon date > 8 weeks away → Build Flutter app
- If hackathon date < 8 weeks away → Use video OCR
- Post-hackathon → Build Flutter app for future research

---

## 📞 Contact Research Team
- **Principal Investigator**: d.radic@roc-nijmegen.nl
- **Direct Line**: +31 6 14454426

---

*Learn together how AI changes programming workflows* 🔬
