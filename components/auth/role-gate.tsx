"use client";

import { useCurrentRole } from "@/hooks/use-curren-role";
import { UserRole } from "@prisma/client";
import { FormError } from "../form-error";
import { FormStatus } from "../form-status";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormStatus
        variant="error"
        message="You do not have permission to view this content!"
      />
    );
  }
  return <>{children}</>;
};
