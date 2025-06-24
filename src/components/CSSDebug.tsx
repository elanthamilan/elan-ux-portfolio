
const CSSDebug = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'red', fontSize: '24px', marginBottom: '20px' }}>
        CSS Debug Test Page
      </h1>
      
      {/* Test 1: Inline styles (should always work) */}
      <div style={{ 
        backgroundColor: 'yellow', 
        padding: '10px', 
        margin: '10px 0',
        border: '2px solid blue'
      }}>
        ✅ Test 1: Inline styles - This should have yellow background and blue border
      </div>

      {/* Test 2: Basic Tailwind classes */}
      <div className="bg-red-500 text-white p-4 m-2 rounded">
        🎨 Test 2: Basic Tailwind - This should be red background with white text
      </div>

      {/* Test 3: Custom CSS classes */}
      <div className="test-custom-class">
        🔧 Test 3: Custom CSS - This should have green background (if custom CSS works)
      </div>

      {/* Test 4: Flexbox */}
      <div className="flex gap-4 p-4 bg-blue-100">
        <div className="bg-purple-500 p-2 text-white">Flex Item 1</div>
        <div className="bg-orange-500 p-2 text-white">Flex Item 2</div>
      </div>

      {/* Test 5: Typography */}
      <div className="text-xl font-bold text-green-600 my-4">
        📝 Test 5: Typography - This should be large, bold, and green
      </div>

      {/* Test 6: Responsive design */}
      <div className="bg-pink-300 p-4 md:bg-cyan-300 lg:bg-amber-300">
        📱 Test 6: Responsive - Pink on mobile, cyan on tablet, amber on desktop
      </div>

      {/* Console log test */}
      <button 
        onClick={() => {
          console.log('Button clicked - JS is working');
          console.log('Computed styles:', window.getComputedStyle(document.body));
        }}
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        🖱️ Click to test JS + log computed styles
      </button>

      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p><strong>Instructions:</strong></p>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Check which tests work and which don't</li>
          <li>Open Developer Tools → Console after clicking the button</li>
          <li>Check Network tab to see if CSS files are loading</li>
          <li>Look for any error messages in Console</li>
        </ul>
      </div>
    </div>
  );
};

export default CSSDebug;
