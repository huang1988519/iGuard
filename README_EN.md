# iGuard - iOS SDK Source Code Hardening

> Next-generation code protection solution based on virtual machine technology

Deep obfuscation and hardening for iOS SDK source code, using proprietary virtual machine technology to encrypt and protect code, significantly increasing the difficulty of reverse engineering and cracking. Protect your core business logic and intellectual property.

**Contact Email:** [support@anti.xin](mailto:support@anti.xin)

[中文版本](README.md) | English

---

## Core Features

### 🔀 Code Logic Obfuscation

By splitting, scrambling, and hiding the control flow of original code, or inserting junk instructions into functions, the code logic is complexified without affecting the original code logic. The control flow graph becomes extremely complex, containing a large number of unreachable code blocks and interleaved logical jumps, significantly increasing the difficulty of reverse engineering.

### 🔐 String Encryption

Encrypt string literals in code and decrypt them at runtime. Even when using IDA Pro, Hopper, and other tools for decompilation, plaintext strings cannot be directly viewed, effectively preventing leakage of critical information such as API keys, business logic identifiers, and other sensitive strings.

### 🛡️ Code Virtualization Protection (VMP)

**（Only supports Xcode 12）**

Using proprietary virtual machine technology, native code is converted into virtual instruction sets and executed through a dedicated interpreter. Combined with randomization and encryption mechanisms, reverse engineering becomes extremely difficult. Even with professional decompilation tools, only interpreter-level code can be seen, and the original logic cannot be restored.

---

## Source Code Example

<details>
<summary>Click to view source code</summary>

```objc
- (NSString *)obfSwiftCalcWithUser:(NSString *)user token:(NSString *)token {
    // xse: string encryption
    NSString *url = @"https://pay.example.com/process";
    NSString *key = @"TOKEN-SECRET-2024";
    NSString *msg = @"access denied";

    // sub: arithmetic and bitwise operations
    uint32_t mix = ((uint32_t)(0 * 4)) ^ 0xFFFFFFFFU;
    mix = mix ^ ((uint32_t)(token.length * 97)) ^ 0x5A5A3C3CU;
    
    // obf/level: branch mixing
    if ((mix % 2) == 0) {
        return [NSString stringWithFormat:@"%@|OK|%@", url, key];
    } else {
        return [NSString stringWithFormat:@"%@|%@", url, msg];
    }
}
```

</details>

---

## Original Mach-O

### Original Mach-O (IDA) Screenshot

![Original Mach-O IDA Screenshot](images/原始macho.png)

*Shows the decompilation effect of an unprotected Mach-O in IDA as a baseline reference.*

---

## Protection Effect Demonstration

Using IDA Pro decompilation analysis to visually demonstrate the protection effects after hardening.

### Control Flow Graph

**After Hardening (Mixed Display)**

![Control Flow Graph (Mixed Display)](images/控制流-后.png)

*Mixed display includes multiple control flow rewriting methods (flattening, bogus branches, substitution, hiding, etc.), with a complex overall structure that is difficult to restore.*

### Decompiled Code

**After Hardening**

![Decompiled Code (After Hardening)](images/反编译-后.png)

*Decompiled code is severely obfuscated, containing a large number of useless instructions and complex jumps. Strings are encrypted, making it impossible to directly understand the code logic.*

### Strings

**After Hardening**

![String List (After Hardening)](images/字符串-后.png)

*Sensitive strings are encrypted. Plaintext cannot be directly seen in the string list, and decryption only occurs at runtime.*

### VMP Protection

**After VMP Protection**

![VMP Protection Effect](images/vmp.png)

*After using Virtual Machine Protection (VMP) technology, the original code is converted into virtual instruction sets. Even when using professional decompilation tools like IDA Pro, only interpreter-level code can be seen, and the original business logic cannot be restored. The code is completely virtualized, making reverse engineering extremely difficult.*

---

## Usage Instructions

Manual hardening service, professional team provides customized protection solutions.

### 📧 Contact Email

**support@anti.xin**

Please send an email to the above address. Our technical team will contact you within 24 hours to provide professional hardening services.

### Service Process

#### 1. Prepare Source Code

**Important: Complete source code must be provided.** Organize the iOS SDK source code that needs to be hardened into an independent Framework project. It is recommended to write core code in C/C++ to achieve the best hardening effects and stability. We cannot harden pre-compiled binary files.

#### 2. Send Email Application

Send an email to **support@anti.xin**, including: project introduction, code scope to be hardened, Xcode version information, contact information, etc. Our technical team will evaluate your needs and provide a hardening solution.

#### 3. Provide Source Code

After confirming the hardening solution, please provide the complete source code project. We will perform hardening in a secure environment to ensure your code security. After hardening is complete, we will provide the hardened Framework and verification report.

#### 4. Acceptance Testing

After receiving the hardened Framework, please perform complete functional testing to ensure all functions work normally. We will also provide an IDA Pro decompilation comparison report to demonstrate the hardening effects.

### Service Requirements

- ✅ **Complete source code must be provided**, binary files only are not supported
- ✅ Supports Xcode 14.1/14.2/15.0.1/15.3/15.4
- ✅ Supports X86/M1 architecture Mac
- ✅ Recommended to write core code in C/C++
- ✅ Project path cannot contain spaces or Chinese characters
- ✅ Use New Build System
- ⚠️ Does not support hardening entire App, recommend hardening only core Framework
- ⚠️ Only supports manual hardening service, no automated tools provided

> **⚠️ Important Notice**  
> This service only supports manual hardening and requires you to provide complete source code. We cannot harden pre-compiled binary files. Please ensure you have full permission to the source code and agree to our use of the source code for hardening.

---

## Technical Advantages

Based on compile-time deep code protection technology.

| Feature | Description |
|---------|-------------|
| 🔧 **Compile-time Protection** | Code transformation and protection at compile stage, no impact on runtime performance |
| 🎲 **Randomization Mechanism** | Each compilation uses different protection strategies and mapping relationships, increasing reverse engineering difficulty |
| 🔒 **Multi-layer Encryption** | Adopts multi-layer encryption mechanisms to prevent static analysis and dynamic debugging |
| 🌉 **Smart Compatibility** | Automatically handles interactions with external systems, maintaining complete functional compatibility |
| ⚡ **Performance Optimization** | Protects core code, minimizes performance impact, maintains efficient SDK operation |
| 🔄 **Version Compatibility** | Supports multiple Xcode versions, ensures stable operation in different environments |

---

## VMP Protection Principle

Virtual Machine Protection (VMP) technology explained.

### Protection Flow

```
📝 Source Code Compilation
  ↓
Original code compiled to intermediate representation
  ↓
🔄 Code Transformation
  ↓
Convert code to virtual instruction set
  ↓
🎲 Randomization Processing
  ↓
Apply randomization strategy, generate unique protection scheme
  ↓
🔐 Encryption Processing
  ↓
Encrypt virtual instructions and interpreter, embed into binary
  ↓
▶️ Runtime Execution
  ↓
Interpreter decrypts and executes virtual instructions
```

### VMP Architecture Diagram

![VMP Architecture Diagram](images/vmp.png)

---

## Contact Information

**Email:** [support@anti.xin](mailto:support@anti.xin)

---

<p align="center">
<small>&copy; 2026 iGuard SDK Hardening Solution. Protect your code, guard your intellectual property.</small>
</p>
