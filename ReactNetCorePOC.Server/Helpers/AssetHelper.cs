using System.Text.Json;

namespace ReactNetCorePOC.Server.Helpers
{
    public static class AssetHelper
    {
        private static readonly Lazy<AssetManifest> _manifest = new(() => LoadManifest());

        public static string GetJsAsset() => _manifest.Value.Js ?? "/generated/index.js";
        public static string GetCssAsset() => _manifest.Value.Css ?? "/generated/index.css";

        private static AssetManifest LoadManifest()
        {
            try
            {
                var manifestPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "manifest.json");
                if (File.Exists(manifestPath))
                {
                    var json = File.ReadAllText(manifestPath);
                    return JsonSerializer.Deserialize<AssetManifest>(json) ?? new AssetManifest();
                }
            }
            catch
            {
                // Fallback to default values
            }

            return new AssetManifest();
        }

        private class AssetManifest
        {
            public string? Js { get; set; }
            public string? Css { get; set; }
        }
    }
}
