import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  comparePassword: (password: string) => Promise<boolean>;
}

const UserSchema: Schema<IUser> = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving the user
UserSchema.pre<IUser>('save', async function (next) {
  const user = this as IUser;

  // Only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
  } catch (err) {
    next(err as mongoose.CallbackError);
  }
});

// Compare password method
UserSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
  const user = this as IUser;
  return bcrypt.compare(password, user.password);
};

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
