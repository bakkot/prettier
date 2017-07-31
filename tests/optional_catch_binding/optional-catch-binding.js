try {
  foo();
} catch {
  bar();
}

try {
  foo();
} catch {}

try {
  foo();
} catch {
  bar();
} finally {
  baz();
}
