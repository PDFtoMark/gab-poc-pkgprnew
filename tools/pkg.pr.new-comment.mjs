/**
 * Benign, trusted version from the default branch.
 */
export default async function ({ github, context, core, output }) {
  console.log("LEGIT_SCRIPT_RAN", JSON.stringify(output));
}
