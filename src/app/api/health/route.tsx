export async function GET() {
	try {
		return new Response(
			JSON.stringify({ message: "Server is up and running" }),
			{ status: 200, headers: { "Content-Type": "application/json" } }
		);
	} catch (error) {
		return new Response(
			JSON.stringify({
				message:
					error instanceof Error
						? error.message || "Server doesn't response."
						: "Unknown error",
			}),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
}
