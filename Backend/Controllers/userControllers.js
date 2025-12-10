import User from "../Modals/userModal.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


// ✅ Register new user
export const registerUser=async(req,res)=>{
    try{
    const{name,email,password,phone}=req.body
    
    if (!name) res.status(404).send({message:"Name not found!"})
        if(!email) res.status(404).send({message:"Email not found!"})
            if (!password)res.status(404).send({message:"Password not found!"})
            if (!phone)res.status(404).send({message:"Phone Number not found!"})

                 
                // Regex Return
    if(!emailRegex.test(email)) return res.status(400).send({message:"invalid email"})
    if(!passwordRegex.test(password))return res.status(400).send({message:"Invalid Password" })            

        let existUser=await User.findOne({email})
        if(existUser) res.status(400).send({message:"User already registered"})
        
            let hashedPassword=await bcrypt.hash(password,10);

        let newUser=await User.create({name,email,password:hashedPassword,phone})
        res.status(201).send({message:"user registered successfully", newUser:newUser})
}catch (err){
    console.log(err)
    res.status(500).send({message: "Error in register", err: err.message})
}
    }



//  ✅ Login user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Check if fields are provided
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // 2️⃣ Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Optional: password length check
    if (password.length < 8) {
      return res.status(400).json({ message: "Password must be at least 8 characters long" });
    }

    // 3️⃣ Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // 4️⃣ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // 5️⃣ Generate JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};


// ✅ Get logged-in user profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile", error: error.message });
  }
};

// ✅ Update profile
export const updateUserProfile = async (req, res) => {
  try {
    const { name, phone, address } = req.body;

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.name = name || user.name;
    user.phone = phone || user.phone;
    user.address = address || user.address;

    await user.save();

    res.json({
      message: "Profile updated successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating profile", error: error.message });
  }
};

// Home page Contact Us
export const contactUs=async (req,res)=>{
  try{
    const {name, email, message}= req.body;

       // ✅ Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields (name, email, message) are required" });
    }

        const user = await User.findById(req.user.id);
    if (!user){ return res.status(404).json({ message: "User not found" });
  }else {
    res.status(500).json({message:"User not found. Please register / logIn"})
  }

  user.name=name;
  user.email=email;
  user.message=message;

  await user.save()
    res.json({
      message: "queries send successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        message:user.message
      },
    });
    
  }catch(error){
    res.status(500).json({message:"Error Contact Us",error:error.message});
  }
};


// ✅ Admin: Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
};
