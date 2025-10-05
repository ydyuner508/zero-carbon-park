import { NextRequest, NextResponse } from 'next/server';
import { getAIProvider } from '@/lib/ai/index';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const electricity = formData.get('electricity');
    const gas = formData.get('gas');
    const oil = formData.get('oil');
    const location = formData.get('location');
    const imageFile = formData.get('image') as File | null;

    let imageBase64 = '';
    if (imageFile) {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      imageBase64 = `data:${imageFile.type};base64,${buffer.toString('base64')}`;
    }

    const aiProvider = getAIProvider();
    
    const energyData = {
      electricity: electricity ? parseFloat(electricity as string) : 0,
      gas: gas ? parseFloat(gas as string) : 0,
      oil: oil ? parseFloat(oil as string) : 0,
      location: location as string,
      hasImage: !!imageBase64
    };

    const aiResponse = await aiProvider.generateZeroCarbonAnalysis(energyData, imageBase64);
    
    return NextResponse.json({
      success: true,
      data: aiResponse
    });
    
  } catch (error) {
    console.error('Error generating AI response:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process request' },
      { status: 500 }
    );
  }
}