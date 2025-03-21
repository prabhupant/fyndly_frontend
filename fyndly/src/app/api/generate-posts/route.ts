import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { theme, numPosts, wordLimit } = await request.json();

    // This is a mock response. Replace this with your actual API integration
    const mockPosts = Array(numPosts).fill(null).map((_, index) => ({
      post_summary: `Sample summary for post ${index + 1} about ${theme}`,
      author: "AI Writer",
      source: "https://example.com",
      post_on_user_style: `This is a generated post about ${theme} within ${wordLimit} words. This is just a mock response - replace this with your actual API integration.`
    }));

    return NextResponse.json(mockPosts);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate posts' },
      { status: 500 }
    );
  }
} 