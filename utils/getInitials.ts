type Params = {
  firstName: string;
  lastName: string;
};

function getInitials({ firstName, lastName }: Params): string {
  return firstName.charAt(0) + lastName.charAt(0);
}

export { getInitials };
