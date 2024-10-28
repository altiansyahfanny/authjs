import crypto from "crypto";
import { getPasswordResetTokenByEmail } from "@/data/password-reset-token";
import { getVerificationTokenByEmail } from "@/data/verification-token";
import { v4 as uuidv4 } from "uuid";
import { db } from "./db";
import { get } from "http";
import { getTwoFactorTokenByEmail } from "@/data/two-factor-token";

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const exixtingToken = await getVerificationTokenByEmail(email);
  if (exixtingToken) {
    await db.verificationToken.delete({
      where: { id: exixtingToken.id },
    });
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      token,
      email,
      expires,
    },
  });

  return verificationToken;
};

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const exixtingToken = await getPasswordResetTokenByEmail(email);
  if (exixtingToken) {
    await db.passwordResetToken.delete({
      where: { id: exixtingToken.id },
    });
  }

  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      token,
      email,
      expires,
    },
  });

  return passwordResetToken;
};

export const generateTwoFactorToken = async (email: string) => {
  const token = crypto.randomInt(100_000, 1_000_000).toString();
  const expires = new Date(new Date().getTime() + 5 * 60 * 1000);

  const exixtingToken = await getTwoFactorTokenByEmail(email);
  if (exixtingToken) {
    await db.twoFactorToken.delete({
      where: { id: exixtingToken.id },
    });
  }

  const twoFactorToken = await db.twoFactorToken.create({
    data: {
      token,
      email,
      expires,
    },
  });

  return twoFactorToken;
};
