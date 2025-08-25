# Sparko 結帳頁面設計規劃

## 品牌色彩系統
- 主色：#F4A261 (溫暖橘色)
- 副色：#E76F51 (深橘紅色)
- 背景：#FFF9F4 (溫暖白色)
- 文字：#2D2D2D (深灰色)
- 輔助色：#264653 (深綠色，用於信任標章)

## 頁面結構設計

### 1. 整體佈局
- 使用 CSS Grid 實現響應式設計
- 桌面版：左右分欄（商品資訊 + 付款區塊）
- 手機版：上下堆疊
- 最大寬度：1200px，居中顯示

### 2. 商品資訊區塊
- 商品圖示/圖片（使用 emoji 或 SVG icon）
- 商品名稱（大標題）
- 商品描述（副標題）
- 價格（突出顯示）
- 特色列表（bullet points）

### 3. 付款區塊
- 信任標章區域
  - 🔒 Secure checkout
  - 🔍 Reviewed by lawyers
  - ⚡ Instant delivery
- 付款按鈕（大型、突出）
- 安全說明文字

### 4. 額外說明區塊
- "為什麼選擇 Sparko？" 區塊
- 包含 3-4 個重點特色
- 使用卡片式設計

## 視覺設計要素

### 1. 卡片設計
- 圓角：12px
- 陰影：0 4px 20px rgba(0,0,0,0.08)
- 內邊距：2rem
- 背景：純白色

### 2. 按鈕設計
- 主要按鈕：漸層背景 (#F4A261 到 #E76F51)
- 圓角：8px
- 內邊距：1rem 2rem
- hover 效果：輕微放大 + 陰影增強

### 3. 動畫效果
- 頁面載入：淡入動畫
- 按鈕 hover：transform scale(1.02)
- 卡片 hover：陰影增強
- 過渡時間：0.3s ease

### 4. 響應式斷點
- 手機：< 768px
- 平板：768px - 1024px
- 桌面：> 1024px

## 商品圖示設計
- NDA：📄
- Founder Agreement：🤝
- Shareholder Agreement：📊
- Investment Term Sheet：💼
- Startup Legal Pack：📦
- Super Spark 3/10：⚡
- Plus 訂閱：👑

## 信任元素
- SSL 安全標章
- 律師審核標章
- 即時交付標章
- 退款保證說明
- 客戶評價數量

## 互動設計
- 商品卡片 hover 效果
- 按鈕點擊回饋
- 載入狀態指示
- 成功購買動畫

