export default function page() {
  return (
    <form action="/auth/login" method="post">
      <label htmlFor="email">Email</label>
      <input name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" />
      <button>Sign In</button>
      <button formAction="/auth/sign-up">Sign Up</button>
      <button formAction="/auth/logout">Sign Out</button>
    </form>
  );
}
