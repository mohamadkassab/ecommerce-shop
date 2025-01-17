import { Button, Link, Paper, TextField, Typography } from "@mui/material";
import { Facebook, LinkedIn, Instagram } from "@mui/icons-material";

const FooterSection = () => {
  return (
    <Paper className="flex flex-wrap gap-5 sm:gap-10 lg:gap-20 justify-center">
      <div className="flex flex-col gap-y-1 flex-1">
        <Typography
          sx={{ color: "text.dark", marginBottom: "1rem" }}
          fontWeight="bold"
          variant="body2"
        >
          About
        </Typography>

        <Link href="/about-us" underline="none">
          <Typography
            variant="body2"
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Overview
          </Typography>
        </Link>
        <Link href="/about-us" underline="none">
          <Typography
            variant="body2"
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Carrers
          </Typography>
        </Link>
      </div>

      <div className="flex flex-col gap-y-1 flex-1">
        <Typography
          sx={{ color: "text.dark", marginBottom: "1rem" }}
          fontWeight="bold"
          variant="body2"
        >
          Contact
        </Typography>

        <Link href="tel:+1234567890" underline="none">
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            +1 234 567 890
          </Typography>
        </Link>

        <Link href="mailto:contact@example.com" underline="none">
          <Typography
            variant="body2"
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            contact@example.com
          </Typography>
        </Link>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          1234 Street Name, City, Country
        </Typography>
      </div>

      <div className="flex flex-col gap-y-1 flex-1">
        <Typography
          sx={{ color: "text.dark", marginBottom: "1rem" }}
          fontWeight="bold"
          variant="body2"
        >
          Follow Us
        </Typography>
        <div className="w-full flex  items-start gap-x-4">
          <Link
            href="https://instagram.com"
            target="_blank"
            underline="none"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "24px", 
              height: "24px", 
            }}
          >
            <Instagram
              sx={{
                color: "text.secondary",
                fontSize: "24px", // Icon size
                "&:hover": { color: "primary.main" },
              }}
            />
          </Link>

          <Link
            href="https://facebook.com"
            target="_blank"
            underline="none"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "24px",
              height: "24px",
            }}
          >
            <Facebook
              sx={{
                color: "text.secondary",
                fontSize: "24px",
                "&:hover": { color: "primary.main" },
              }}
            />
          </Link>

          <Link
            href="https://linkedin.com"
            target="_blank"
            underline="none"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "24px",
              height: "24px",
            }}
          >
            <LinkedIn
              sx={{
                color: "text.secondary",
                fontSize: "24px",
                "&:hover": { color: "primary.main" },
              }}
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-y-1 flex-1">
        <Typography
          sx={{ color: "text.dark", marginBottom: "1rem" }}
          fontWeight="bold"
          variant="body2"
        >
          Support
        </Typography>

        <Link href="/about-us" underline="none">
          <Typography
            variant="body2"
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            FAQ
          </Typography>
        </Link>
        <Link href="/about-us" underline="none">
          <Typography
            variant="body2"
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Help Center
          </Typography>
        </Link>
        <Link href="/about-us" underline="none">
          <Typography
            variant="body2"
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Shipping Policy
          </Typography>
        </Link>
        <Link href="/about-us" underline="none">
          <Typography
            variant="body2"
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Returns & Exchanges
          </Typography>
        </Link>
        <Link href="/about-us" underline="none">
          <Typography
            variant="body2"
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Terms and Conditions
          </Typography>
        </Link>
        <Link href="/about-us" underline="none">
          <Typography
            variant="body2"
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Privacy Policy
          </Typography>
        </Link>
      </div>

      <div className="flex flex-col gap-y-1 flex-1">
        <Typography
          sx={{ color: "text.dark", marginBottom: "1rem", flexShrink: 0 }}
          fontWeight="bold"
          variant="body2"
        >
          Get in Touch
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Subscribe to our newsletter for the latest updates.
        </Typography>

        <form className="flex flex-col items-start gap-2 mt-3">
          <TextField
            label="Your Email"
            variant="outlined"
            size="small" // Smaller height
            sx={{
              width: "200px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "text.secondary",
                },
              },
              "&:hover .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
            required
          />
          <Button
            variant="contained"
            sx={{
              flexShrink: 0,
              width: "100px",
              px: 2,
              py: 1,
              backgroundColor: (theme) => theme.palette.primary.main,
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.dark,
              },
            }}
          >
            Subscribe
          </Button>
        </form>
      </div>
    </Paper>
  );
};

export default FooterSection;
