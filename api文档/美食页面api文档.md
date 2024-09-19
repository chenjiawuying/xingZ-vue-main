好的，我将进一步具体化这些API的请求和响应。以下是详细的API设计：

---

### 1. 获取美食排行榜

**请求地址**: `/api/v1/dishes/rank`

**请求方法**: `GET`

**请求参数**:

- `city` (string, 必填): 城市名称，例如 `"广州"`。
- `limit` (int, 可选): 返回的美食数量，默认为 10。最大值为 50。

**请求示例**:

```bash
GET /api/v1/dishes/rank?city=广州&limit=10
```

**响应参数**:

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "烧鹅饭",
      "score": 4.8,
      "reviews": 120,
      "imageUrl": "https://example.com/dishes/1.jpg"
    },
    {
      "id": 2,
      "name": "沙县小吃",
      "score": 4.7,
      "reviews": 95,
      "imageUrl": "https://example.com/dishes/2.jpg"
    },
    ...
  ],
  "total": 2
}
```

---

### 2. 获取商家列表

**请求地址**: `/api/v1/restaurants`

**请求方法**: `GET`

**请求参数**:

- `city` (string, 必填): 城市名称，例如 `"广州"`。
- `limit` (int, 可选): 返回的商家数量，默认为 200。最大值为 1000。
- `area` (string, 可选): 商圈筛选（例如“北京路”、“珠江新城”）。

**请求示例**:

```bash
GET /api/v1/restaurants?city=广州&limit=10&area=北京路
```

**响应参数**:

```json
{
  "status": "success",
  "data": [
    {
      "id": 101,
      "name": "北京路餐厅",
      "score": 4.9,
      "reviews": 200,
      "imageUrl": "https://example.com/restaurants/101.jpg",
      "area": "北京路"
    },
    {
      "id": 102,
      "name": "珠江新城餐厅",
      "score": 4.6,
      "reviews": 150,
      "imageUrl": "https://example.com/restaurants/102.jpg",
      "area": "珠江新城"
    },
    ...
  ],
  "total": 2
}
```

---

### 3. 获取美食详情

**请求地址**: `/api/v1/dishes/{id}`

**请求方法**: `GET`

**请求参数**:

- `id` (int, 必填): 美食的ID。
- `city` (string, 必填): 城市名称，例如 `"广州"`。

**请求示例**:

```bash
GET /api/v1/dishes/1?city=广州
```

**响应参数**:

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "name": "烧鹅饭",
    "description": "烧鹅饭是广州的传统美食，皮脆肉嫩，配以特制酱料。",
    "score": 4.8,
    "reviews": 120,
    "imageUrl": "https://example.com/dishes/1.jpg"
  }
}
```

---

### 4. 获取商家详情

**请求地址**: `/api/v1/restaurants/{id}`

**请求方法**: `GET`

**请求参数**:

- `id` (int, 必填): 商家的ID。
- `city` (string, 必填): 城市名称，例如 `"广州"`。

**请求示例**:

```bash
GET /api/v1/restaurants/101?city=广州
```

**响应参数**:

```json
{
  "status": "success",
  "data": {
    "id": 101,
    "name": "北京路餐厅",
    "description": "位于北京路的特色餐厅，以粤菜为主，深受当地人喜爱。",
    "score": 4.9,
    "reviews": 200,
    "imageUrl": "https://example.com/restaurants/101.jpg",
    "address": "广州市北京路88号",
    "phone": "020-88888888"
  }
}
```

---

### 5. 获取综合筛选项

**请求地址**: `/api/v1/filter-options`

**请求方法**: `GET`

**请求参数**:

- `city` (string, 必填): 城市名称，例如 `"广州"`。
- `type` (string, 必填): 返回筛选项类型，可选值为：
  - `business-areas`: 返回商圈列表。
  - `categories`: 返回餐饮分类列表。
  - `features`: 返回美食特色列表。

**请求示例**:

```bash
GET /api/v1/filter-options?city=广州&type=business-areas
```

**响应参数**:

1. **商圈列表**:

```json
{
  "status": "success",
  "city": "广州",
  "type": "business-areas",
  "options": [
     "不限",
    "北京路/海珠广场",
    "广州东站/五山",
    "珠江新城/五羊新城",
    "火车站/越秀公园附近",
    "南沙万达广场/天后宫商圈",
    "广州大学城附近",
    "淘金/环市东/广州动物园",
    "新塘商业中心区",
    "从化区中心",
    "芳村花地湾",
    "中新广州知识城",
    "白水寨风景名胜区",
    "增城万达广场/东汇城",
    "天河体育中心/岗顶",
    "大沙地商圈",
    "萝岗科学城/宝能演艺中心",
    "江南西/国际轻纺城/珠江南附近",
    "花都融创文旅城周边",
    "琶洲会展/广州塔/客村",
    "从化温泉风景区",
    "长隆/广州南站",
    "白云山风景区",
    "白云同和/龙洞地区",
    "番禺市桥/亚运城",
    "新白云国际机场附近",
    "天河公园/东圃商圈",
    "沙面岛/上下九步行街",
    "白云黄石/同德围地区"
  ]
}
```

2. **餐饮分类列表**:

```json
{
  "status": "success",
  "city": "广州",
  "type": "categories",
  "options": [
 "不限",
    "快餐",
    "川菜",
    "比萨",
    "连锁/加盟",
    "酒吧",
    "贵州菜",
    "主题",
    "徽菜",
    "山西菜",
    "广州菜",
    "下午茶",
    "豫菜",
    "潮汕菜",
    "夜市",
    "俄罗斯菜",
    "西班牙菜",
    "特色",
    "湘菜",
    "江浙菜",
    "云南菜",
    "粤菜",
    "新疆菜",
    "港式",
    "西餐",
    "日本料理",
    "韩国料理",
    "东南亚美食",
    "海鲜",
    "火锅",
    "小吃"
  ]
}
```

3. **美食特色列表**:

```json
{
  "status": "success",
  "city": "广州",
  "type": "features",
  "options": [
     "不限",
    "大众都爱吃",
    "不吃不等于没来过",
    "早茶·粤菜",
    "当地人最爱",
    "广式甜甜甜品",
    "广州之味的根源-西关小吃",
    "把美味带回家",
    "这些你敢吃吗🐍🐍"
  ]
}
```

---

关于轮播图的API设计，可以参考以下格式：

---

### 6. 获取轮播图内容

**请求地址**: `/api/v1/carousel`

**请求方法**: `GET`

**请求参数**:

- `city` (string, 必填): 城市名称，例如 `"广州"`。
- `limit` (int, 可选): 返回的轮播图数量，默认为 3，最大值为 10。

**请求示例**:

```bash
GET /api/v1/carousel?city=广州&limit=3
```

**响应参数**:

```json
{
  "status": "success",
  "data": [
    {
      "src": "https://example.com/images/food1.jpg",
      "description1": "老广州味道，广州茶楼拾忆",
      "description2": "现在的广州仍有许多如陶陶居那样的老字号茶楼，也有如炳胜那样的新兴茶楼，茶楼在广州比比皆是..."
    },
    {
      "src": "https://example.com/images/food2.jpg",
      "description1": "这是图片 2 的第一段介绍",
      "description2": "这是图片 2 的第二段详细介绍。"
    },
    {
      "src": "https://example.com/images/food3.jpg",
      "description1": "这是图片 3 的第一段介绍",
      "description2": "这是图片 3 的第二段详细介绍。"
    }
  ],
  "total": 3
}
```

---

这个API会返回城市的轮播图内容，`src` 是图片的URL，`description1` 和 `description2` 则是图片的描述信息。