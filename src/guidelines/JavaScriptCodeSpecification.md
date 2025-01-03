# Javascript编写规范

## 变量 / Variable

### 命名方式 / The naming method

#### 使用小驼峰 / Use a small hump

- bad

  ```javascript
  let first_name = 'John' // 使用下划线，不符合小驼峰命名法
  let LAST_NAME = 'Doe' // 全大写，通常用于常量
  let UserName = 'Jane' // 首字母大写，通常用于构造函数或类
  ```

- good

  ```javascript
  let firstName = 'John' // 小驼峰命名法：首单词小写，后续单词首字母大写
  let lastName = 'Doe' // 小驼峰命名法
  let userName = 'Jane' // 小驼峰命名法
  ```

#### 有实际意义 / Has practical significance

- bad

  ```javascript
  let x = 10 // 没有表达出变量的实际用途
  let y = 'Product' // 含义模糊，不清楚具体指代什么产品
  let data = [1, 2, 3] // 过于泛化，无法明确数据的含义
  ```

- good

  ```javascript
  let productCount = 10 // 明确表示产品的数量
  let productName = 'Laptop' // 明确表示产品的名称
  let userIDs = [1, 2, 3] // 明确表示用户ID列表
  ```

#### 添加前缀名词 / Add a prefix noun

- bad

  ```javascript
  let id = 123 // 不清楚是哪种ID
  let name = 'Alice' // 不清楚是哪个实体的名称
  let list = [1, 2, 3] // 不清楚列表中存储的是什么类型的数据
  ```

- good

  ```javascript
  let employeeId = 456 // 员工ID
  let customerName = 'Bob' // 客户名称
  let orderItems = ['item1', 'item2'] // 订单项目列表
  ```

#### 避免缩写 / Avoid abbreviations

- bad

  ```javascript
  let usrNm = 'Alice' // 使用缩写，难以理解
  let cnt = 10 // 使用缩写，难以理解
  let prd = 'Laptop' // 使用缩写，难以理解
  ```

- good

  ```javascript
  let userName = 'Alice' // 使用完整单词，易于理解
  let count = 10 // 使用完整单词，易于理解
  let productName = 'Laptop' // 使用完整单词，易于理解
  ```

#### 长度适中 / The length is moderate

- bad

  ```javascript
  let aVeryVeryLongVariableNameThatIsHardToReadAndUnderstand = 123 // 太长，难以阅读
  let nm = 'Alice' // 太短，难以理解
  ```

- good

  ```javascript
  let userAge = 123 // 适中长度，易于理解
  let userName = 'Alice' // 适中长度，易于理解
  let productPrice = 299.99 // 适中长度，易于理解
  ```

#### 布尔变量 / Bourg variable

- bad

  ```javascript
  let a = true // 没有明确的含义
  let b = false // 没有明确的含义
  let c = true // 没有明确的含义
  ```

- good

  ```javascript
  let isActive = true // 表示是否激活
  let canClick = false // 表示是否可以点击
  let hasPermission = true // 表示是否有权限
  ```

#### 避免单个字母 / Avoid single letters

- bad

  ```javascript
  let a = 10 // 没有明确的含义
  let b = 'Product' // 没有明确的含义
  let c = [1, 2, 3] // 没有明确的含义
  ```

- good

  ```javascript
  let productCount = 10 // 表示产品的数量
  let productName = 'Product' // 表示产品的名称
  let productIds = [1, 2, 3] // 表示产品ID列表
  ```

#### 避免使用模糊的通用词 / Avoid using vague generic words

- bad

  ```javascript
  let data = 123 // 模糊，不清楚具体指代什么数据
  let info = 'Some information' // 模糊，不清楚具体指代什么信息
  let value = [1, 2, 3] // 模糊，不清楚具体指代什么值
  ```

- good

  ```javascript
  let productCount = 123 // 表示产品的数量
  let productDescription = 'Some information' // 表示产品的描述
  let productPrices = [1, 2, 3] // 表示产品的价格列表
  ```

#### 避免使用匈牙利命名法 / Avoid Hungarian nomenclature

- bad

  ```javascript
  let strName = 'Alice' // 匈牙利命名法，使用前缀 `str` 表示字符串
  let intAge = 30 // 匈牙利命名法，使用前缀 `int` 表示整数
  let boolIsActive = true // 匈牙利命名法，使用前缀 `bool` 表示布尔值
  ```

- good

  ```javascript
  let userName = 'Alice' // 清晰的变量名，不使用前缀
  let userAge = 30 // 清晰的变量名，不使用前缀
  let isActive = true // 清晰的变量名，不使用前缀
  ```

#### 考虑上下文 / Consider the context

- bad

  ```javascript
  let name = 'Alice' // 在不同上下文中使用相同的变量名
  let name = 'Bob' // 在不同上下文中使用相同的变量名
  ```

- good

  ```javascript
  let userName = 'Alice' // 在用户上下文中使用明确的变量名
  let productName = 'Bob' // 在产品上下文中使用明确的变量名
  ```

#### 避免使用复数形式表示单个实体 / Avoid representing a single entity in the plural

- bad

  ```javascript
  let users = 'Alice' // 使用复数形式表示单个实体
  let products = 'Laptop' // 使用复数形式表示单个实体
  let orders = 'Order123' // 使用复数形式表示单个实体
  ```

- good

  ```javascript
  let userName = 'Alice' // 使用单数形式表示单个实体
  let productName = 'Laptop' // 使用单数形式表示单个实体
  let order = 'Order123' // 使用单数形式表示单个实体
  ```

#### 避免使用特殊字符 / Avoid using special characters

- bad

  ```javascript
  let user_name = "Alice" // 使用下划线
  let user@name = "Alice" // 使用特殊字符 @
  let user#name = "Alice" // 使用特殊字符 #
  ```

- good

  ```javascript
  let userName = 'Alice' // 使用小驼峰命名法，不使用特殊字符
  let userAge = 30 // 使用小驼峰命名法，不使用特殊字符
  let isActive = true // 使用小驼峰命名法，不使用特殊字符
  ```

#### 避免使用拼音或英文混写 / Avoid using pinyin or English spelling

- bad

  ```javascript
  let userMingzi = 'Alice' // 拼音和英文混写
  let shangpinName = 'Laptop' // 拼音和英文混写
  ```

- good

  ```javascript
  let userName = 'Alice' // 全部使用英文
  let productName = 'Laptop' // 全部使用英文
  ```

#### 避免使用魔法数字/字符串 / Avoid magic numbers/strings

- bad

  ```javascript
  if (status === 1) {
    console.log('Active')
  }
  ```

- good

  ```javascript
  const STATUS_ACTIVE = 1
  if (status === STATUS_ACTIVE) {
    console.log('Active')
  }
  ```

#### 避免保留字 / Avoid reserved words

- bad

  ```javascript
  let class = "Advanced"; // `class` 是保留字
  let function = () => {}; // `function` 是保留字
  ```

- good

  ```javascript
  let className = 'Advanced' // 使用其他名称
  let myFunction = () => {} // 使用其他名称
  ```

## 常量

### 命名方式

#### 全部大写 /

- bad

  ```javascript
  const maxValue = 100 // 使用大驼峰命名
  const pi = 3.14159 // 使用小写
  ```

- good

  ```javascript
  const MAX_VALUE = 100 // 使用全部大写
  const PI = 3.14159 // 使用全部大写
  ```
