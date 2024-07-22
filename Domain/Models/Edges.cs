namespace Turnkey_challenge.Domain.Models
{
    public class EdgeData
    {
        public string? Id { get; set; }
        public int Source { get; set; }
        public int Target { get; set; }
        public int Label { get; set; }
    }
    public class Edges
    {
          public string? Group { get; set; }
          public EdgeData? Data { get; set; }

    }
}